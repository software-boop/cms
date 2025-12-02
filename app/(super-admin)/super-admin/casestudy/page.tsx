"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Upload,
  Select,
  Table,
  Modal,
  Popconfirm,
  Space,
  message,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const API_BASE = "http://172.30.0.200:1334/api";
const UPLOAD_API = `${API_BASE}/upload`;

const getAuthHeaders = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default function CaseStudyPage() {
  const [form] = Form.useForm();
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [sectors, setSectors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingDocId, setEditingDocId] = useState<string | null>(null);

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE}/case-studies?populate[0]=image&populate[1]=sector`,
        { headers: getAuthHeaders() }
      );
      setCaseStudies(res.data.data);
    } catch (error) {
      console.error("Fetch error:", error);
      message.error("Failed to load case studies");
    } finally {
      setLoading(false);
    }
  };

  const fetchSectors = async () => {
    try {
      const res = await axios.get(`${API_BASE}/sectors`, { headers: getAuthHeaders() });
      setSectors(res.data.data);
    } catch (error) {
      console.error("Sector fetch error:", error);
      message.error("Failed to load sectors");
    }
  };

  useEffect(() => {
    fetchCaseStudies();
    fetchSectors();
  }, []);

  const uploadImage = async (file: any) => {
    if (!file) return null;
    
    try {
      const formData = new FormData();
      formData.append("files", file);
      const uploadRes = await axios.post(UPLOAD_API, formData, { 
        headers: getAuthHeaders() 
      });
      return uploadRes.data[0].id;
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      let imageId = null;

      if (values.image && Array.isArray(values.image) && values.image.length > 0) {
        const file = values.image[0];
        
        if (file.originFileObj) {
          imageId = await uploadImage(file.originFileObj);
        } else if (file.uid) {
          const res = await axios.get(
            `${API_BASE}/upload/files?filters[id][$eq]=${file.uid}`,
            { headers: getAuthHeaders() }
          );
          imageId = res.data?.[0]?.id || null;
        }
      }

      const payload = {
        data: {
          name: values.name,
          company: values.company,
          role: values.role,
          city: values.city || undefined,
          rating: values.rating || undefined,
          quote: values.quote,
          sector: values.sector || undefined,
          image: imageId ? imageId : undefined,
        },
      };

      console.log("Payload:", JSON.stringify(payload, null, 2));

      if (editingDocId) {
        await axios.put(
          `${API_BASE}/case-studies/${editingDocId}`, 
          payload, 
          { headers: getAuthHeaders() }
        );
        message.success("Case Study updated successfully");
      } else {
        await axios.post(
          `${API_BASE}/case-studies`, 
          payload, 
          { headers: getAuthHeaders() }
        );
        message.success("Case Study created successfully");
      }

      fetchCaseStudies();
      form.resetFields();
      setModalVisible(false);
      setEditingDocId(null);
    } catch (err: any) {
      console.error("Submit error:", err);
      console.error("Error response:", err.response?.data);
      message.error(err.response?.data?.error?.message || "Failed to save case study");
    } finally {
      setLoading(false);
    }
  };

  const formatImageUpload = (images: any) => {
    if (!images) return [];
    
    const imageArray = Array.isArray(images) ? images : [images];
    
    return imageArray.map((img: any) => ({
      uid: img.id,
      name: img.name,
      status: "done",
      url: `http://172.30.0.200:1334${img.url}`,
    }));
  };

  const handleEdit = async (record: any) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE}/case-studies/${record.documentId}?populate[0]=image&populate[1]=sector`,
        { headers: getAuthHeaders() }
      );

      const caseStudy = res.data.data;
      
      form.setFieldsValue({
        name: caseStudy.name,
        company: caseStudy.company,
        role: caseStudy.role,
        city: caseStudy.city,
        rating: caseStudy.rating,
        quote: caseStudy.quote,
        sector: caseStudy.sector?.documentId,
        image: formatImageUpload(caseStudy.image),
      });

      setEditingDocId(caseStudy.documentId);
      setModalVisible(true);
    } catch (error: any) {
      console.error("Edit error:", error);
      message.error("Failed to load case study");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (docId: string) => {
    try {
      await axios.delete(`${API_BASE}/case-studies/${docId}`, { 
        headers: getAuthHeaders() 
      });
      message.success("Case Study deleted");
      fetchCaseStudies();
    } catch (error: any) {
      console.error("Delete error:", error);
      message.error("Failed to delete");
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setEditingDocId(null);
    setModalVisible(false);
  };

  const columns = [
    { 
      title: "Name", 
      dataIndex: "name",
      key: "name" 
    },
    { 
      title: "Company", 
      dataIndex: "company",
      key: "company" 
    },
    { 
      title: "Role", 
      dataIndex: "role",
      key: "role" 
    },
    {
      title: "Sector",
      key: "sector",
      render: (_: any, record: any) => record.sector?.title || "-"
    },
    {
      title: "Image",
      key: "image",
      render: (_: any, record: any) => {
        const imageData = record?.image;
        const imageArray = Array.isArray(imageData) ? imageData : imageData ? [imageData] : [];
        
        return imageArray.length > 0 ? (
          <img
            src={`http://172.30.0.200:1334${imageArray[0].url}`}
            alt={record.name}
            width={50}
            height={50}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        ) : (
          "—"
        );
      }
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm 
            title="Are you sure you want to delete this case study?" 
            onConfirm={() => handleDelete(record.documentId)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Case Study Management</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={() => {
            setEditingDocId(null);
            form.resetFields();
            setModalVisible(true);
          }}
        >
          Add Case Study
        </Button>
      </div>

      <Table
        rowKey="documentId"
        columns={columns}
        dataSource={caseStudies}
        loading={loading}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title={editingDocId ? "Edit Case Study" : "Add Case Study"}
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item 
            label="Name" 
            name="name" 
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item 
            label="Company" 
            name="company" 
            rules={[{ required: true, message: "Please enter company" }]}
          >
            <Input placeholder="Enter company" />
          </Form.Item>

          <Form.Item 
            label="Role" 
            name="role" 
            rules={[{ required: true, message: "Please enter role" }]}
          >
            <Input placeholder="Enter role" />
          </Form.Item>

          <Form.Item label="City" name="city">
            <Input placeholder="Enter city" />
          </Form.Item>

          <Form.Item label="Rating" name="rating">
            <Input type="number" min={1} max={5} placeholder="Enter rating (1-5)" />
          </Form.Item>

          <Form.Item 
            label="Quote" 
            name="quote" 
            rules={[{ required: true, message: "Please enter quote" }]}
          >
            <TextArea rows={4} placeholder="Enter testimonial quote" />
          </Form.Item>

          <Form.Item label="Sector" name="sector">
            <Select placeholder="Select Sector" allowClear>
              {sectors.map((s) => (
                <Option key={s.documentId} value={s.documentId}>
                  {s.title}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList || [])}
          >
            <Upload 
              beforeUpload={() => false} 
              listType="picture-card"
              maxCount={1}
            >
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Space style={{ width: "100%" }}>
              <Button type="primary" htmlType="submit" loading={loading} block>
                {editingDocId ? "Update Case Study" : "Create Case Study"}
              </Button>
              <Button onClick={handleCancel} disabled={loading}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}