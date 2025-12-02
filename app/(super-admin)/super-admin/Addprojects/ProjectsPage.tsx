"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Upload,
  Select,
  Table,
  Modal,
  Space,
  message,
  Popconfirm,
  Card,
  Row,
  Col,
  Divider,
} from "antd";
import { UploadOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const API = "http://172.30.0.200:1334/api";
const UPLOAD_API = `${API}/upload`; // Works for Strapi v5
const FILE_BASE = "http://172.30.0.200:1334"; // Base path for media

const META_ROBOTS_OPTIONS = ["index, follow", "noindex, follow", "noindex, nofollow"];

const getAuthHeaders = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Safely resolve image path
const resolveImageUrl = (file: any) =>
  file?.formats?.medium?.url ||
  file?.formats?.small?.url ||
  file?.formats?.thumbnail?.url ||
  file?.url ||
  "/default-image.jpg";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDocumentId, setEditingDocumentId] = useState<string | null>(null);
  const [editingRecord, setEditingRecord] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/projects?populate=*`, { headers: getAuthHeaders() });
      setProjects(res.data.data || []);
    } catch (err) {
      message.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Upload a single image
  const uploadSingleFile = async (file: any) => {
    const formData = new FormData();
    formData.append("files", file.originFileObj); // 🔥 Correct handling
    const res = await axios.post(UPLOAD_API, formData, { headers: getAuthHeaders() });
    return res.data[0].id;
  };

  // Upload multiple OG images
  const uploadMultipleFiles = async (files: any[]) => {
    const ids: number[] = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("files", file.originFileObj);
      const res = await axios.post(UPLOAD_API, formData, { headers: getAuthHeaders() });
      ids.push(res.data[0].id);
    }
    return ids;
  };

  // Create / Update Project
  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      let imageId = editingRecord?.image?.id || null;
      if (values.image && values.image.length > 0) {
        imageId = await uploadSingleFile(values.image[0]);
      }

      let ogImages: number[] = editingRecord?.seo?.ogImage || [];
      if (values.ogImage && values.ogImage.length > 0) {
        ogImages = await uploadMultipleFiles(values.ogImage);
      }

      const payload = {
        data: {
          title: values.title,
          description: values.description,
          projectobjective: values.projectobjective,
          startDate: values.startDate ? dayjs(values.startDate).toISOString() : null,
          endDate: values.endDate ? dayjs(values.endDate).toISOString() : null,
          image: imageId,
          seo: {
            metaTitle: values.seo?.metaTitle || "",
            metaDescription: values.seo?.metaDescription || "",
            canonicalUrl: values.seo?.canonicalUrl || "",
            metaRobots: values.seo?.metaRobots || "index, follow",
            ogTitle: values.seo?.ogTitle || "",
            ogDescription: values.seo?.ogDescription || "",
            ogImage: ogImages,
          },
        },
      };

      if (editingDocumentId) {
        await axios.put(`${API}/projects/${editingDocumentId}`, payload, { headers: getAuthHeaders() });
        message.success("Project updated successfully");
      } else {
        await axios.post(`${API}/projects`, payload, { headers: getAuthHeaders() });
        message.success("Project created successfully");
      }

      setModalOpen(false);
      form.resetFields();
      fetchProjects();
    } catch (err: any) {
      console.error(err.response?.data);
      message.error(err.response?.data?.error?.message || "Error saving project");
    } finally {
      setLoading(false);
    }
  };

  // Delete Project
  const handleDelete = async (documentId: string) => {
    try {
      await axios.delete(`${API}/projects/${documentId}`, { headers: getAuthHeaders() });
      message.success("Deleted successfully");
      fetchProjects();
    } catch {
      message.error("Failed to delete project");
    }
  };

  // Table Columns
  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Objective", dataIndex: "projectobjective" },
    {
      title: "Image",
      render: (record: any) =>
        record.image ? (
          <img src={`${FILE_BASE}${resolveImageUrl(record.image)}`} width={70} alt={record.title} />
        ) : (
          "No Image"
        ),
    },
    {
      title: "Actions",
      render: (record: any) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditingDocumentId(record.documentId);
              setEditingRecord(record);
              form.setFieldsValue({
                title: record.title,
                description: record.description,
                projectobjective: record.projectobjective,
                startDate: record.startDate ? dayjs(record.startDate) : null,
                endDate: record.endDate ? dayjs(record.endDate) : null,
                seo: record.seo,
                image: [],
                ogImage: [],
              });
              setModalOpen(true);
            }}
          />
          <Popconfirm title="Are you sure you want to delete?" onConfirm={() => handleDelete(record.documentId)}>
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Card
        title="Projects Management"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={() => { form.resetFields(); setModalOpen(true); setEditingDocumentId(null); }}>
            Add Project
          </Button>
        }
        style={{ margin: 20 }}
      >
        <Table dataSource={projects} columns={columns} rowKey="documentId" loading={loading} />
      </Card>

      <Modal open={modalOpen} onCancel={() => setModalOpen(false)} footer={null} width={800}>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="projectobjective" label="Objective" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="ongoing">Ongoing</Select.Option>
              <Select.Option value="completed">Completed</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}><Input.TextArea rows={3} /></Form.Item>
          <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}><DatePicker /></Form.Item>
          <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}><DatePicker /></Form.Item>

          <Form.Item name="image" label="Main Image" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
            <Upload beforeUpload={() => false} maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Divider>SEO Fields</Divider>
          <Form.Item name={["seo", "metaTitle"]} label="Meta Title"><Input /></Form.Item>
          <Form.Item name={["seo", "metaDescription"]} label="Meta Description"><Input.TextArea rows={2} /></Form.Item>
          <Form.Item name={["seo", "canonicalUrl"]} label="Canonical URL"><Input /></Form.Item>
          <Form.Item name={["seo", "metaRobots"]} label="Meta Robots">
            <Select options={META_ROBOTS_OPTIONS.map((v) => ({ label: v, value: v }))} />
          </Form.Item>
          <Form.Item name={["seo", "ogTitle"]} label="OG Title"><Input /></Form.Item>
          <Form.Item name={["seo", "ogDescription"]} label="OG Description"><Input.TextArea rows={2} /></Form.Item>

          <Form.Item name="ogImage" label="OG Images" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
            <Upload beforeUpload={() => false} multiple listType="picture">
              <Button icon={<UploadOutlined />}>Upload Multiple OG Images</Button>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit" block loading={loading}>
            {editingDocumentId ? "Update Project" : "Create Project"}
          </Button>
        </Form>
      </Modal>
    </>
  );
}
