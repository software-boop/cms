// app/solutions/data.ts

export interface SubPoint {
  title: string;
  description: string;
}

export interface Component {
  name: string;
  description: string;
  icon?: any; // Added to support component-level icons
}

export interface FeatureList {
  title: string;
  items: string[];
}

export interface Section {
  title: string;
  slug?: string;
  icon?: any;
  image?: any;
  mainimage?: any;
  mainbanner?: any;
  customComponent?: "HEADPHONE_SCROLL";
  description?: string;
  subPoints?: SubPoint[];
  components?: Component[];
  featureLists?: FeatureList[];
  subsections?: Section[];
}

/* ===================== ERP ICON IMPORTS ===================== */

import AgileGrowthIcon from "./Erp/erpicons/Agile Growth.png";
import AiMachineLearningIcon from "./Erp/erpicons/AI and Machine Learning.png";
import AnalyticsDashboardIcon from "./Erp/erpicons/Analytics Dashboard.png";
import AssetManagementIcon from "./Erp/erpicons/Asset Management.png";
import BlockchainTraceabilityIcon from "./Erp/erpicons/Blockchain for Traceability.png";
import CloudHybridIcon from "./Erp/erpicons/Cloud, On-Premise, or Hybrid.png";
import ComplianceAssuranceIcon from "./Erp/erpicons/Compliance Assurance.png";
import ConstructionAddonIcon from "./Erp/erpicons/Construction Add-On.png";
import CostReductionIcon from "./Erp/erpicons/Cost Reduction.png";
import CrmIcon from "./Erp/erpicons/Customer Relationship Management.png";
import FinanceModuleIcon from "./Erp/erpicons/Finance Module.png";
import GlobalMultiCurrencyIcon from "./Erp/erpicons/Global Multi-Currency.png";
import HealthcareSuiteIcon from "./Erp/erpicons/Healthcare Suite.png";
import HrManagementIcon from "./Erp/erpicons/Human Resources Management.png";
import IntegrationMiddlewareIcon from "./Erp/erpicons/Integration Middleware.png";
import IotIntegrationIcon from "./Erp/erpicons/IoT Integration.png";
import LowCodeCustomizationIcon from "./Erp/erpicons/Low-Code Customization.png";
import ManufacturingModuleIcon from "./Erp/erpicons/Manufacturing Module.png";
import MigrationServicesIcon from "./Erp/erpicons/Migration Services.png";
import MultiTenantArchitectureIcon from "./Erp/erpicons/Multi-Tenant Architecture.png";
import ProcessEfficiencyIcon from "./Erp/erpicons/Process Efficiency.png";
import RetailExtensionIcon from "./Erp/erpicons/Retail Extension.png";
import ScalabilityFeaturesIcon from "./Erp/erpicons/Scalability Features.png";
import SecurityFrameworkIcon from "./Erp/erpicons/Security Framework.png";
import StrategicInsightsIcon from "./Erp/erpicons/Strategic Insights.png";
import SupplyChainManagementIcon from "./Erp/erpicons/Supply Chain Management.png";
import SustainabilityTrackingIcon from "./Erp/erpicons/Sustainability Tracking.png";
import UserTrainingAcademyIcon from "./Erp/erpicons/User Training Academy.png";
import WorkflowAutomationEngineIcon from "./Erp/erpicons/Workflow Automation Engine.png";




/* ===================== SOLAR EPC ICON IMPORTS ===================== */

import AcceleratedRoiIcon from "./Solar/solaricons/Accelerated ROI.png";
import BifacialPvModulesIcon from "./Solar/solaricons/Bifacial PV Modules.png";
import BulkPurchasingIcon from "./Solar/solaricons/Bulk Purchasing.png";
import ConstructionExecutionIcon from "./Solar/solaricons/Construction Execution.png";
import CustomizableSolutionsIcon from "./Solar/solaricons/Customizable Solutions.png";
import ElectricalDesignIcon from "./Solar/solaricons/Electrical Design.png";
import EnergyStorageIntegrationIcon from "./Solar/solaricons/Energy Storage Integration.png";
import EngineeringDesignIcon from "./Solar/solaricons/Engineering Design.png";
import EnvironmentalImpactAssessmentIcon from "./Solar/solaricons/Environmental Impact Assessment.png";
import FinancialModelingIcon from "./Solar/solaricons/Financial Modeling.png";
import GridIntegrationServicesIcon from "./Solar/solaricons/Grid Integration Services.png";
import InventoryTrackingIcon from "./Solar/solaricons/Inventory Tracking.png";
import LogisticsCoordinationIcon from "./Solar/solaricons/Logistics Coordination.png";
import OmPlanningIcon from "./Solar/solaricons/O&M Planning.png";
import PermittingSupportIcon from "./Solar/solaricons/Permitting Support.png";
import ProcurementManagementIcon from "./Solar/solaricons/Procurement Management.png";
import ProjectManagementSoftwareIcon from "./Solar/solaricons/Project Management Software.png";
import QualityAssuranceIcon from "./Solar/solaricons/Quality Assurance.png";
import QualityControlChecksIcon from "./Solar/solaricons/Quality Control Checks.png";
import RiskMitigationIcon from "./Solar/solaricons/Risk Mitigation.png";
import RiskReductionIcon from "./Solar/solaricons/Risk Reduction.png";
import SimulationModelingIcon from "./Solar/solaricons/Simulation and Modeling.png";
import SiteSurveyAnalysisIcon from "./Solar/solaricons/Site Survey and Analysis.png";
import SmartInvertersIcon from "./Solar/solaricons/Smart Inverters.png";
import StructuralEngineeringIcon from "./Solar/solaricons/Structural Engineering.png";
import SustainabilityImpactIcon from "./Solar/solaricons/Sustainability Impact.png";
import SystemSizingIcon from "./Solar/solaricons/System Sizing.png";
import TrackerSystemsIcon from "./Solar/solaricons/Tracker Systems.png";
import TrainingHandoverIcon from "./Solar/solaricons/Training and Handover.png";
import TurnkeySimplicityIcon from "./Solar/solaricons/Turnkey Simplicity.png";
import VendorQualificationIcon from "./Solar/solaricons/Vendor Qualification.png";


// vms//
import Aivms_banner from './vsm_images/73170.jpg'
import vms_manin_image from './vsm_images/IMG_20231130_033658.jpg'

/* ===================== AI VMS ICON IMPORTS ===================== */

import AiVideoAnalyticsEngineIcon from "./vsm_images/vms_icons/VMS-- 1.AI Video Analytics Engine.png";
import CentralizedVideoServerIcon from "./vsm_images/vms_icons/Centralized Video Server.png";
import CloudStorageIntegrationIcon from "./vsm_images/vms_icons/Cloud Storage Integration.png";
import RealTimeAlertSystemIcon from "./vsm_images/vms_icons/Real-Time Alert System.png";
import ForensicSearchToolsIcon from "./vsm_images/vms_icons/Forensic Search Tools.png";
import MobileAccessAppIcon from "./vsm_images/vms_icons/Mobile Access App.png";
import ApiGatewayIcon from "./vsm_images/vms_icons/API Gateway.png";
import EdgeAiProcessingIcon from "./vsm_images/vms_icons/Edge AI Processing.png";
import ReportingDashboardIcon from "./vsm_images/vms_icons/Reporting Dashboard.png";
import ComplianceAuditLogsIcon from "./vsm_images/vms_icons/Compliance Audit Logs.png";

import ObjectFaceRecognitionIcon from "./vsm_images/vms_icons/Object and Face Recognition.png";
import AnomalyDetectionIcon from "./vsm_images/vms_icons/Anomaly Detection.png";
import LicensePlateRecognitionIcon from "./vsm_images/vms_icons/License Plate Recognition (ANPR).png";
import HeatMappingIcon from "./vsm_images/vms_icons/Heat Mapping.png";
import PredictiveAnalyticsIcon from "./vsm_images/vms_icons/Predictive Analytics.png";
import MultiCameraSyncIcon from "./vsm_images/vms_icons/Multi-Camera Synchronization.png";

import HybridDeploymentIcon from "./vsm_images/vms_icons/Hybrid Deployment Options.png";
import ScalableArchitectureIcon from "./vsm_images/vms_icons/Scalable Architecture.png";
import UserRoleManagementIcon from "./vsm_images/vms_icons/User Role Management.png";
import FirmwareUpdatesIcon from "./vsm_images/vms_icons/Automatic Firmware Updates.png";
import BandwidthOptimizationIcon from "./vsm_images/vms_icons/Bandwidth Optimization.png";
import BackupRedundancyIcon from "./vsm_images/vms_icons/Backup and Redundancy.png";

import IoTDeviceSupportIcon from "./vsm_images/vms_icons/IoT Device Support.png";
import ThirdPartyApiHooksIcon from "./vsm_images/vms_icons/Third-Party API Hooks.png";
import VirtualRealityPlaybackIcon from "./vsm_images/vms_icons/Virtual Reality Playback.png";
import AiModelCustomizationIcon from "./vsm_images/vms_icons/AI Model Customization.png";

import ProactiveRiskMitigationIcon from "./vsm_images/vms_icons/Proactive Risk Mitigation.png";
import OperationalCostSavingsIcon from "./vsm_images/vms_icons/Operational Cost Savings.png";
import EnhancedIncidentResponseIcon from "./vsm_images/vms_icons/Enhanced Incident Response.png";
import ImprovedComplianceIcon from "./vsm_images/vms_icons/Improved Compliance.png";
import DataDrivenInsightsIcon from "./vsm_images/vms_icons/Data-Driven Insights.png";


// ai biometric 


/* ===================== SMART BIOMETRIC ICON IMPORTS ===================== */

import AccessControlInterfaceIcon from "./Accescontroll/Accescontrollicons/Access Control Interface.png";
import AgeEmotionEstimationIcon from "./Accescontroll/Accescontrollicons/Age and Emotion Estimation.png";
import AiProcessingUnitIcon from "./Accescontroll/Accescontrollicons/AI Processing Unit.png";
import AuditTrailLoggerIcon from "./Accescontroll/Accescontrollicons/Audit Trail Logger.png";
import BatteryBackupIcon from "./Accescontroll/Accescontrollicons/Battery Backup.png";
import BiometricScannerIcon from "./Accescontroll/Accescontrollicons/Biometric Scanner.png";
import BorderControlIntegrationIcon from "./Accescontroll/Accescontrollicons/Border Control Integration.png";
import CentralManagementServerIcon from "./Accescontroll/Accescontrollicons/Central Management Server.png";
import ComplianceCertificationsIcon from "./Accescontroll/Accescontrollicons/Compliance Certifications.png";
import DataPrivacyIcon from "./Accescontroll/Accescontrollicons/Data Privacy.png";
import DemographicAnalyticsIcon from "./Accescontroll/Accescontrollicons/Demographic Analytics.png";
import EdgeVsCloudProcessingIcon from "./Accescontroll/Accescontrollicons/Edge vs. Cloud Processing.png";
import ElevatedSecurityIcon from "./Accescontroll/Accescontrollicons/Elevated Security.png";
import EncryptionModuleIcon from "./Accescontroll/Accescontrollicons/Encryption Module.png";
import FacialRecognitionCameraIcon from "./Accescontroll/Accescontrollicons/Facial Recognition Camera.png";
import HealthcareAccessIcon from "./Accescontroll/Accescontrollicons/Healthcare Access.png";
import HybridAuthenticationIcon from "./Accescontroll/Accescontrollicons/Hybrid Authentication.png";
import IntegrationApiIcon from "./Accescontroll/Accescontrollicons/Integration API.png";
import LivenessDetectionIcon from "./Accescontroll/Accescontrollicons/Liveness Detection.png";
import MobileSdkIcon from "./Accescontroll/Accescontrollicons/Mobile SDK.png";
import MultiFaceDetectionIcon from "./Accescontroll/Accescontrollicons/Multi-Face Detection.png";
import OperationalEfficiencyIcon from "./Accescontroll/Accescontrollicons/Operational Efficiency.png";
import PoseAngleToleranceIcon from "./Accescontroll/Accescontrollicons/Pose and Angle Tolerance.png";
import RemoteManagementIcon from "./Accescontroll/Accescontrollicons/Remote Management.png";
import ScalabilityIcon from "./Accescontroll/Accescontrollicons/Scalability.png";
import ScalableEnrollmentIcon from "./Accescontroll/Accescontrollicons/Scalable Enrollment.png";
import SmartCityKiosksIcon from "./Accescontroll/Accescontrollicons/Smart City Kiosks.png";
import TimeAttendanceModuleIcon from "./Accescontroll/Accescontrollicons/Time and Attendance Module.png";
import UserConvenienceIcon from "./Accescontroll/Accescontrollicons/User Convenience.png";
import UserEnrollmentKioskIcon from "./Accescontroll/Accescontrollicons/User Enrollment Kiosk.png";
import WatchlistMatchingIcon from "./Accescontroll/Accescontrollicons/Watchlist Matching.png";




/* ===================== ICON IMPORTS ===================== */
import AiCctvSurveillanceIcon from "../../components/smart bus icons/AI CCTV Surveillance.png";
import BatterySupportEnergyStorageIcon from "../../components/smart bus icons/Battery Support & Energy Storage.png";
import BenefitsForOperatorsIcon from "../../components/smart bus icons/Benefits for Operators.png";
import BenefitsForPassengersIcon from "../../components/smart bus icons/Benefits for Passengers.png";
import BigDataAnalyticsIcon from "../../components/smart bus icons/Big Data Analytics.png";
import BreathAnalyzerSystemIcon from "../../components/smart bus icons/Breath Analyzer System.png";

import EmergencyBroadcastFeatureIcon from "../../components/smart bus icons/Emergency Broadcast Feature.png";
import FoamFireSuppressionSystemIcon from "../../components/smart bus icons/Foam Fire Suppression System.png";
import GpsTrackingIcon from "../../components/smart bus icons/GPS Tracking.png";

import LedSignageIcon from "../../components/smart bus icons/LED Signage.png";
import LedTvIcon from "../../components/smart bus icons/LED TV.png";

import PublicAddressSystemIcon from "../../components/smart bus icons/Public Address System.png";

import SmartTicketingForFutureIcon from "../../components/smart bus icons/Smart Ticketing (For Future).png";
import TechnologyIcon from "../../components/smart bus icons/Technology.png";
import WifiHotspotIcon from "../../components/smart bus icons/Wi-Fi Hotspot.png";
/* ===================== SMART BUS PICTURE IMPORTS ===================== */

import AlcoholDetectionForSaferBusOperationsPic from "./bussollutionimage/breth.png";

import CctvSurveillanceArchitectureDiagramPic from "../../components/smart bus pictures/CCTV Surveillance Architecture Diagram.png";
import CctvSurveillanceInBusesPic from "./bussollutionimage/Gemini_Generated_Image_o69vgho69vgho69v (1).png";
import DashboardSmartBusSolutionPic from "./bussollutionimage/smart bus web.jpg";

import EnhancedPassengerAccessFeaturesPic from "./bussollutionimage/dashobard.jpg";

import PeopleCountingAndOccupancyPic from "../../components/smart bus pictures/People Counting and Occupancy.png";
import ResultsOfSmartBusSolutionsPic from "../../components/smart bus pictures/Results of Smart Bus Solutions.png";

import SmartFeaturesForBusesPic from "./bussollutionimage/modern-city-street-scene-featuring-bus-driving.jpg";

import WifiHotspotInBusesPic from "../../components/smart bus pictures/WiFi Hotspot in Buses_ Enabling Smart, Connected Travel.png";
import Sb1Img from "./bussollutionimage/sb1.png";
import Sb2Img from "./bussollutionimage/sb2.png";
import Sb3Img from "./bussollutionimage/sb3.png";
import Sb4Img from "./bussollutionimage/sb4.png";
import Sb5Img from "./bussollutionimage/sb5.png";
import Sb6Img from "./bussollutionimage/sb6.png";



export const smartBusData: Section = {
  title: "Empowering Public Transport: The Next-Gen Smart Bus Experience",
  slug: "smart-bus-solution",
  customComponent: "HEADPHONE_SCROLL",
  mainimage: DashboardSmartBusSolutionPic,
  mainbanner: DashboardSmartBusSolutionPic,
  icon: TechnologyIcon,
  subsections: [
    {
      title: "Smart Bus Systems Overview",
      // image: ResultsOfSmartBusSolutionsPic,
      subPoints: [
        {
          title: "Safety Improvement",
          description: "Implementing smart technologies increases safety protocols for both passengers and drivers.",
        },
        {
          title: "Real-Time Tracking",
          description: "Real-time data enables effective tracking and communication with passengers, enhancing their travel experience.",
        },
        {
          title: "Operational Efficiency",
          description: "Integration of IoT enhances the operational efficiency of public transport systems, leading to better resource management.",
        },
        {
          title: "Enhanced Rider Experience",
          description: "Smart systems contribute to a more enjoyable and seamless travel experience for riders through improved services.",
        },
        {
          title: "IoT Integration",
          description: "Utilizing IoT, surveillance, and data technologies creates a more connected public transport system.",
        },
      ],
    },
    {
      title: "What is Smart Bus Solution?",
      description: "A Smart Bus Solution is an advanced transportation system that leverages technology to enhance safety, efficiency, and convenience in public or private bus services. It integrates GPS tracking, CCTV surveillance, driver behavior monitoring, and passenger tracking for real-time monitoring and management.",
      image: SmartFeaturesForBusesPic,
    },

    {
      title: "Driver Behaviour",
      components: [
        {
          name: "Driver Behaviour",
          description: "Monitors driver actions to improve safety and compliance.",
          icon: Sb1Img,
        },
        {
          name: "Drowsiness Detection",
          description: "Detects fatigue and alerts to prevent accidents.",
          icon: Sb2Img,
        },
        {
          name: "Harsh Braking & Acceleration",
          description: "Tracks aggressive driving events for safer operations.",
          icon: Sb3Img,
        },
        {
          name: "Overspeed Monitoring",
          description: "Alerts when the driver exceeds configured speed limits.",
          icon: Sb4Img,
        },
        {
          name: "Mobile Usage Detection",
          description: "Detects distraction from phone usage while driving.",
          icon: Sb5Img,
        },
        {
          name: "Compliance Reports",
          description: "Generates driver performance reports for training and audits.",
          icon: Sb6Img,
        },

      ],
    },

    {
      title: "Core Components",
      components: [
        {
          name: "AI CCTV Surveillance",
          description: "Smart cameras for real-time monitoring, threat detection, and enhanced security.",
          icon: AiCctvSurveillanceIcon,
        },
        {
          name: "GPS Tracking",
          description: "Live location updates for efficient route management and passenger convenience.",
          icon: GpsTrackingIcon,
        },
        {
          name: "LED Signage",
          description: "Screens showing routes, stops, alerts, and travel information.",
          icon: LedSignageIcon,
        },
        {
          name: "LED TV",
          description: "Dynamic advertising screens to generate revenue through targeted content.",
          icon: LedTvIcon,
        },
        {
          name: "Wi-Fi Hotspot",
          description: "Free internet access onboard to enhance passenger experience and connectivity.",
          icon: WifiHotspotIcon,
        },
        {
          name: "Public Address System",
          description: "Driver mic and internal speakers for announcements regarding stops or emergencies.",
          icon: PublicAddressSystemIcon,
        },
        {
          name: "Breath Analyzer System",
          description: "Prevents bus ignition if alcohol is detected in the driver's breath.",
          icon: BreathAnalyzerSystemIcon,
        },
        {
          name: "Foam Fire Suppression System",
          description: "Extinguishes flammable liquid fires by smothering them with cooling foam.",
          icon: FoamFireSuppressionSystemIcon,
        },
        {
          name: "Big Data Analytics",
          description: "Enables real-time analysis of routes, patterns, and vehicle performance.",
          icon: BigDataAnalyticsIcon,
        },
        {
          name: "Smart Ticketing",
          description: "Digital fare payments via cards or mobile apps, streamlining boarding.",
          icon: SmartTicketingForFutureIcon,
        },
      ],
    },
    {
      title: "CCTV Surveillance in Buses",
      image: CctvSurveillanceInBusesPic,
      mainimage: CctvSurveillanceArchitectureDiagramPic,
      subPoints: [
        {
          title: "AI-Based CCTV Cameras",
          description: "Strategically installed cameras cover entry points, seating areas, and the driver cabin.",
        },
        {
          title: "24/7 Recording",
          description: "Continuous recording ensures incidents are captured and reviewed when needed.",
        },
        {
          title: "Crime Deterrence",
          description: "Visible surveillance acts as a strong deterrent against criminal activities.",
        },
      ],
    },
    // {
    //   title: "Driver Monitoring with CCTV Technology",
    //   image: DriverBehaviorPic,
    //   subPoints: [
    //     {
    //       title: "Behavior Analytics",
    //       description: "Detects drowsiness, distraction, and mobile phone usage.",
    //     },
    //     {
    //       title: "Aggressive Driving Detection",
    //       description: "Identifies speeding, harsh braking, and unsafe maneuvers.",
    //     },
    //     {
    //       title: "Automated Alerts",
    //       description: "Instant notifications enable quick corrective action.",
    //     },
    //   ],
    // },
    {
      title: "Alcohol Detection for Safer Bus Operations",
      image: AlcoholDetectionForSaferBusOperationsPic,
      description: "Drivers must complete a breath test before ignition. If alcohol exceeds limits, the vehicle will not start.",
      icon: BreathAnalyzerSystemIcon,
      featureLists: [
        {
          title: "Key Hardware Features",
          items: ["IR Sensor", "Proximity Sensor", "IR Illuminator", "White Fill Light", "RGB Sensor"],
        },
      ],
    },
    {
      title: "Smart Passenger Features",
      image: EnhancedPassengerAccessFeaturesPic,
      components: [
        {
          name: "Automatic Passenger Counting (APC)",
          description: "Accurately tracks passenger flow using advanced sensors.",
          icon: PeopleCountingAndOccupancyPic,
        },
        {
          name: "Wi-Fi Connectivity",
          description: "Providing seamless high-speed internet for passengers.",
          icon: WifiHotspotInBusesPic,
        },
        {
          name: "Panic Buttons",
          description: "Instant alerts for emergencies triggered by drivers or passengers.",
          icon: EmergencyBroadcastFeatureIcon,
        },
      ],
    },
    // {
    //   title: "Smart Bus Solution Benefits",
    //   image: SmartBusSolutionBenefitsPic,
    //   subPoints: [
    //     {
    //       title: "Enhanced Safety and Security",
    //       description: "Advanced surveillance and emergency response systems protect passengers and staff.",
    //     },
    //     {
    //       title: "Improved Passenger Satisfaction",
    //       description: "Reliable schedules and modern amenities increase rider confidence.",
    //     },
    //     {
    //       title: "Cost Optimization",
    //       description: "Automation reduces operational costs and improves resource utilization.",
    //     },
    //   ],
    // },
  ],
};
// AI VMS Data
// export const aiVmsData: Section = {
//     mainimage: vms_manin_image,
//   mainbanner: Aivms_banner,
//   title: "Revolutionizing Surveillance: AI-Powered Video Management System",
//   slug: "ai-vms-video-management-system",
//   subsections: [
//     {
//       title: "AI VMS Overview",
//       subPoints: [
//         {
//           title: "Intelligent Threat Detection",
//           description:
//             "AI algorithms analyze video feeds in real-time to identify potential threats and anomalies.",
//         },
//         {
//           title: "Scalable Video Storage",
//           description:
//             "Efficient cloud and on-premise storage solutions handle massive video data volumes securely.",
//         },
//         {
//           title: "Seamless Integration",
//           description:
//             "Compatible with existing CCTV systems, IP cameras, and third-party security tools.",
//         },
//         {
//           title: "User-Friendly Interface",
//           description:
//             "Intuitive dashboards and mobile apps enable easy access and control for operators.",
//         },
//         {
//           title: "Advanced Analytics",
//           description:
//             "Leverages machine learning for object recognition, behavior analysis, and predictive insights.",
//         },
//       ],
//     },
//     {
//       title: "What is AI VMS?",
//       description:
//         "An AI Video Management System (VMS) is a sophisticated platform that combines video surveillance with artificial intelligence to provide proactive security monitoring. It processes live and recorded footage for automated alerts, forensic search, and operational intelligence, reducing manual oversight and enhancing response times across industries like retail, transportation, and critical infrastructure.",
//     },
//     {
//       title: "Core Components",
//       components: [
//         {
//           name: "AI Video Analytics Engine",
//           description:
//             "Processes streams for face detection, license plate recognition, and intrusion alerts.",
//         },
//         {
//           name: "Centralized Video Server",
//           description:
//             "Manages recording, streaming, and distribution of video feeds from multiple sources.",
//         },
//         {
//           name: "Cloud Storage Integration",
//           description:
//             "Scalable storage with encryption and redundancy for long-term video archiving.",
//         },
//         {
//           name: "Real-Time Alert System",
//           description:
//             "Sends notifications via email, SMS, or app for detected events.",
//         },
//         {
//           name: "Forensic Search Tools",
//           description:
//             "Advanced querying by metadata, time, or AI-tagged events for quick retrieval.",
//         },
//         {
//           name: "Mobile Access App",
//           description:
//             "Remote viewing and control from smartphones or tablets.",
//         },
//         {
//           name: "API Gateway",
//           description:
//             "Enables integration with access control, alarms, and enterprise systems.",
//         },
//         {
//           name: "Edge AI Processing",
//           description:
//             "On-device analytics to reduce bandwidth and latency in distributed setups.",
//         },
//         {
//           name: "Reporting Dashboard",
//           description:
//             "Customizable reports on incidents, trends, and system performance.",
//         },
//         {
//           name: "Compliance Audit Logs",
//           description:
//             "Tracks all access and actions for regulatory compliance (e.g., GDPR, HIPAA).",
//         },
//       ],
//     },
//     {
//       title: "AI-Enhanced Surveillance Features",
//       subPoints: [
//         {
//           title: "Object and Face Recognition",
//           description:
//             "Automatically identifies and tracks individuals or objects in crowded environments.",
//         },
//         {
//           title: "Anomaly Detection",
//           description:
//             "Flags unusual behaviors like loitering, abandoned objects, or crowd surges.",
//         },
//         {
//           title: "License Plate Recognition (ANPR)",
//           description:
//             "Captures and matches vehicle plates for access control and investigations.",
//         },
//         {
//           title: "Heat Mapping",
//           description:
//             "Visualizes high-traffic areas for operational optimization.",
//         },
//         {
//           title: "Predictive Analytics",
//           description:
//             "Forecasts potential risks based on historical patterns and trends.",
//         },
//         {
//           title: "Multi-Camera Synchronization",
//           description:
//             "Correlates events across cameras for comprehensive incident reconstruction.",
//         },
//       ],
//     },
//     {
//       title: "System Deployment and Management",
//       subPoints: [
//         {
//           title: "Hybrid Deployment Options",
//           description:
//             "Supports on-premise, cloud, or hybrid models for flexibility.",
//         },
//         {
//           title: "Scalable Architecture",
//           description:
//             "Handles from single-site to enterprise-wide deployments.",
//         },
//         {
//           title: "User Role Management",
//           description:
//             "Granular permissions for operators, admins, and auditors.",
//         },
//         {
//           title: "Automatic Firmware Updates",
//           description:
//             "Ensures cameras and devices stay current with security patches.",
//         },
//         {
//           title: "Bandwidth Optimization",
//           description:
//             "Adaptive streaming reduces data usage without compromising quality.",
//         },
//         {
//           title: "Backup and Redundancy",
//           description:
//             "Failover mechanisms ensure uninterrupted operation.",
//         },
//       ],
//     },
//     {
//       title: "Security and Privacy Controls",
//       description:
//         "AI VMS prioritizes data protection with end-to-end encryption, anonymization tools, and audit trails to comply with global privacy standards.",
//       featureLists: [
//         {
//           title: "Key Security Features",
//           items: [
//             "End-to-End Encryption",
//             "Data Anonymization",
//             "Access Logging",
//             "Tamper Detection",
//             "Secure Multi-Factor Authentication",
//           ],
//         },
//       ],
//     },
//     {
//       title: "Advanced Integration Capabilities",
//       components: [
//         {
//           name: "IoT Device Support",
//           description:
//             "Integrates with sensors for environmental and access monitoring.",
//         },
//         {
//           name: "Third-Party API Hooks",
//           description:
//             "Connects to CRM, HR, or emergency response systems.",
//         },
//         {
//           name: "Virtual Reality Playback",
//           description:
//             "Immersive review of events using 360-degree footage.",
//         },
//         {
//           name: "AI Model Customization",
//           description:
//             "Train models for site-specific threats or objects.",
//         },
//       ],
//     },
//     {
//       title: "AI VMS Benefits",
//       subPoints: [
//         {
//           title: "Proactive Risk Mitigation",
//           description:
//             "AI-driven alerts prevent incidents before escalation.",
//         },
//         {
//           title: "Operational Cost Savings",
//           description:
//             "Reduces need for constant human monitoring.",
//         },
//         {
//           title: "Enhanced Incident Response",
//           description:
//             "Faster resolution through intelligent search and evidence collection.",
//         },
//         {
//           title: "Improved Compliance",
//           description:
//             "Automated logging and reporting streamline audits.",
//         },
//         {
//           title: "Data-Driven Insights",
//           description:
//             "Analytics inform security strategies and resource allocation.",
//         },
//       ],
//     },
//   ],
// }; 

export const aiVmsData: Section = {
  mainimage: vms_manin_image,
  mainbanner: Aivms_banner,
  title: "Revolutionizing Surveillance: AI-Powered Video Management System",
  slug: "ai-vms-video-management-system",

  subsections: [
    {
      title: "AI VMS Overview",
      subPoints: [
        {
          title: "Intelligent Threat Detection",
          description:
            "AI algorithms analyze video feeds in real-time to identify potential threats and anomalies.",
        },
        {
          title: "Scalable Video Storage",
          description:
            "Efficient cloud and on-premise storage solutions handle massive video data volumes securely.",
        },
        {
          title: "Seamless Integration",
          description:
            "Compatible with existing CCTV systems, IP cameras, and third-party security tools.",
        },
        {
          title: "User-Friendly Interface",
          description:
            "Intuitive dashboards and mobile apps enable easy access and control for operators.",
        },
        {
          title: "Advanced Analytics",
          description:
            "Leverages machine learning for object recognition, behavior analysis, and predictive insights.",
        },
      ],
    },

    {
      title: "Core Components",
      components: [
        {
          name: "AI Video Analytics Engine",
          description:
            "Processes streams for face detection, license plate recognition, and intrusion alerts.",
          icon: AiVideoAnalyticsEngineIcon,
        },
        {
          name: "Centralized Video Server",
          description:
            "Manages recording, streaming, and distribution of video feeds from multiple sources.",
          icon: CentralizedVideoServerIcon,
        },
        {
          name: "Cloud Storage Integration",
          description:
            "Scalable storage with encryption and redundancy for long-term video archiving.",
          icon: CloudStorageIntegrationIcon,
        },
        {
          name: "Real-Time Alert System",
          description:
            "Sends notifications via email, SMS, or app for detected events.",
          icon: RealTimeAlertSystemIcon,
        },
        {
          name: "Forensic Search Tools",
          description:
            "Advanced querying by metadata, time, or AI-tagged events for quick retrieval.",
          icon: ForensicSearchToolsIcon,
        },
        {
          name: "Mobile Access App",
          description:
            "Remote viewing and control from smartphones or tablets.",
          icon: MobileAccessAppIcon,
        },
        {
          name: "API Gateway",
          description:
            "Enables integration with access control, alarms, and enterprise systems.",
          icon: ApiGatewayIcon,
        },
        {
          name: "Edge AI Processing",
          description:
            "On-device analytics to reduce bandwidth and latency in distributed setups.",
          icon: EdgeAiProcessingIcon,
        },
        {
          name: "Reporting Dashboard",
          description:
            "Customizable reports on incidents, trends, and system performance.",
          icon: ReportingDashboardIcon,
        },
        {
          name: "Compliance Audit Logs",
          description:
            "Tracks all access and actions for regulatory compliance.",
          icon: ComplianceAuditLogsIcon,
        },
      ],
    },

    {
      title: "AI-Enhanced Surveillance Features",
      components: [
        {
          name: "Object and Face Recognition",
          description:
            "Automatically identifies and tracks individuals or objects in crowded environments.",
          icon: ObjectFaceRecognitionIcon,
        },
        {
          name: "Anomaly Detection",
          description:
            "Flags unusual behaviors like loitering, abandoned objects, or crowd surges.",
          icon: AnomalyDetectionIcon,
        },
        {
          name: "License Plate Recognition (ANPR)",
          description:
            "Captures and matches vehicle plates for access control and investigations.",
          icon: LicensePlateRecognitionIcon,
        },
        {
          name: "Heat Mapping",
          description:
            "Visualizes high-traffic areas for operational optimization.",
          icon: HeatMappingIcon,
        },
        {
          name: "Predictive Analytics",
          description:
            "Forecasts potential risks based on historical patterns and trends.",
          icon: PredictiveAnalyticsIcon,
        },
        {
          name: "Multi-Camera Synchronization",
          description:
            "Correlates events across cameras for comprehensive incident reconstruction.",
          icon: MultiCameraSyncIcon,
        },
      ],
    },

    {
      title: "System Deployment and Management",
      components: [
        {
          name: "Hybrid Deployment Options",
          description:
            "Supports on-premise, cloud, or hybrid models for flexibility.",
          icon: HybridDeploymentIcon,
        },
        {
          name: "Scalable Architecture",
          description:
            "Handles from single-site to enterprise-wide deployments.",
          icon: ScalableArchitectureIcon,
        },
        {
          name: "User Role Management",
          description:
            "Granular permissions for operators, admins, and auditors.",
          icon: UserRoleManagementIcon,
        },
        {
          name: "Automatic Firmware Updates",
          description:
            "Ensures cameras and devices stay current with security patches.",
          icon: FirmwareUpdatesIcon,
        },
        {
          name: "Bandwidth Optimization",
          description:
            "Adaptive streaming reduces data usage without compromising quality.",
          icon: BandwidthOptimizationIcon,
        },
        {
          name: "Backup and Redundancy",
          description:
            "Failover mechanisms ensure uninterrupted operation.",
          icon: BackupRedundancyIcon,
        },
      ],
    },

    {
      title: "Advanced Integration Capabilities",
      components: [
        {
          name: "IoT Device Support",
          description:
            "Integrates with sensors for environmental and access monitoring.",
          icon: IoTDeviceSupportIcon,
        },
        {
          name: "Third-Party API Hooks",
          description:
            "Connects to CRM, HR, or emergency response systems.",
          icon: ThirdPartyApiHooksIcon,
        },
        {
          name: "Virtual Reality Playback",
          description:
            "Immersive review of events using 360-degree footage.",
          icon: VirtualRealityPlaybackIcon,
        },
        {
          name: "AI Model Customization",
          description:
            "Train models for site-specific threats or objects.",
          icon: AiModelCustomizationIcon,
        },
      ],
    },

    {
      title: "AI VMS Benefits",
      components: [
        {
          name: "Proactive Risk Mitigation",
          description:
            "AI-driven alerts prevent incidents before escalation.",
          icon: ProactiveRiskMitigationIcon,
        },
        {
          name: "Operational Cost Savings",
          description:
            "Reduces need for constant human monitoring.",
          icon: OperationalCostSavingsIcon,
        },
        {
          name: "Enhanced Incident Response",
          description:
            "Faster resolution through intelligent search and evidence collection.",
          icon: EnhancedIncidentResponseIcon,
        },
        {
          name: "Improved Compliance",
          description:
            "Automated logging and reporting streamline audits.",
          icon: ImprovedComplianceIcon,
        },
        {
          name: "Data-Driven Insights",
          description:
            "Analytics inform security strategies and resource allocation.",
          icon: DataDrivenInsightsIcon,
        },
      ],
    },
  ],
};


// Solar EPC Data
export const solarEpcData: Section = {
  title: "Sustainable Energy Revolution: Solar EPC Excellence",
  slug: "solar-epc",

  subsections: [
    {
      title: "Solar EPC Overview",
      subPoints: [
        {
          title: "End-to-End Project Delivery",
          description:
            "From feasibility studies to commissioning, ensuring seamless solar project execution.",
        },
        {
          title: "Cost-Effective Solutions",
          description:
            "Optimized designs minimize expenses while maximizing energy yield.",
        },
        {
          title: "Sustainable Practices",
          description:
            "Eco-friendly materials and processes reduce carbon footprint.",
        },
        {
          title: "Scalable Deployments",
          description:
            "Tailored for rooftop, ground-mount, or utility-scale installations.",
        },
        {
          title: "Performance Guarantee",
          description:
            "Long-term warranties on output and system reliability.",
        },
      ],
    },

    {
      title: "What is Solar EPC?",
      description:
        "Solar Engineering, Procurement, and Construction (EPC) is a comprehensive service model that handles the design, sourcing, and building of solar power plants. It streamlines project timelines, ensures quality control, and delivers turnkey solutions for residential, commercial, and industrial clients aiming for renewable energy adoption.",
    },

    {
      title: "Core Components",
      components: [
        {
          name: "Engineering Design",
          description:
            "Detailed site assessments, system modeling, and layout optimization using CAD and simulation tools.",
          icon: EngineeringDesignIcon,
        },
        {
          name: "Procurement Management",
          description:
            "Sourcing high-quality PV modules, inverters, and mounting structures from certified suppliers.",
          icon: ProcurementManagementIcon,
        },
        {
          name: "Construction Execution",
          description:
            "On-site installation, electrical wiring, and structural assembly by certified teams.",
          icon: ConstructionExecutionIcon,
        },
        {
          name: "Quality Assurance",
          description:
            "Rigorous testing and inspections at every phase for compliance and performance.",
          icon: QualityAssuranceIcon,
        },
        {
          name: "Project Management Software",
          description:
            "Tools for scheduling, budgeting, and stakeholder communication.",
          icon: ProjectManagementSoftwareIcon,
        },
        {
          name: "Grid Integration Services",
          description:
            "Synchronization with utility grids including metering and interconnection agreements.",
          icon: GridIntegrationServicesIcon,
        },
        {
          name: "O&M Planning",
          description:
            "Post-commissioning maintenance strategies for sustained efficiency.",
          icon: OmPlanningIcon,
        },
        {
          name: "Financial Modeling",
          description:
            "ROI calculations, incentive applications, and financing coordination.",
          icon: FinancialModelingIcon,
        },
        {
          name: "Environmental Impact Assessment",
          description:
            "Studies to ensure minimal ecological disruption.",
          icon: EnvironmentalImpactAssessmentIcon,
        },
        {
          name: "Training and Handover",
          description:
            "Operator training and documentation for smooth asset transition.",
          icon: TrainingHandoverIcon,
        },
      ],
    },

    {
      title: "Engineering Phase Details",
      components: [
        {
          name: "Site Survey and Analysis",
          description:
            "Solar irradiance mapping, soil testing, and shading assessments.",
          icon: SiteSurveyAnalysisIcon,
        },
        {
          name: "System Sizing",
          description:
            "Load calculations and component selection for optimal energy production.",
          icon: SystemSizingIcon,
        },
        {
          name: "Electrical Design",
          description:
            "DC/AC schematics, grounding, and protection systems.",
          icon: ElectricalDesignIcon,
        },
        {
          name: "Structural Engineering",
          description:
            "Wind load simulations and foundation designs.",
          icon: StructuralEngineeringIcon,
        },
        {
          name: "Simulation and Modeling",
          description:
            "PV performance predictions using tools like PVSyst.",
          icon: SimulationModelingIcon,
        },
        {
          name: "Permitting Support",
          description:
            "Assistance with local regulations and approvals.",
          icon: PermittingSupportIcon,
        },
      ],
    },

    {
      title: "Procurement and Supply Chain",
      components: [
        {
          name: "Vendor Qualification",
          description:
            "Tier-1 supplier selection based on reliability and cost.",
          icon: VendorQualificationIcon,
        },
        {
          name: "Bulk Purchasing",
          description:
            "Negotiated rates for economies of scale.",
          icon: BulkPurchasingIcon,
        },
        {
          name: "Logistics Coordination",
          description:
            "Timely delivery and customs clearance management.",
          icon: LogisticsCoordinationIcon,
        },
        {
          name: "Inventory Tracking",
          description:
            "Real-time monitoring to prevent delays.",
          icon: InventoryTrackingIcon,
        },
        {
          name: "Quality Control Checks",
          description:
            "Pre-shipment inspections for defect-free materials.",
          icon: QualityControlChecksIcon,
        },
        {
          name: "Risk Mitigation",
          description:
            "Contingency planning for supply disruptions.",
          icon: RiskMitigationIcon,
        },
      ],
    },

    {
      title: "Advanced Solar Technologies",
      components: [
        {
          name: "Bifacial PV Modules",
          description:
            "Double-sided panels capturing reflected light for higher yields.",
          icon: BifacialPvModulesIcon,
        },
        {
          name: "Smart Inverters",
          description:
            "Grid-supportive devices with monitoring and optimization features.",
          icon: SmartInvertersIcon,
        },
        {
          name: "Tracker Systems",
          description:
            "Single or dual-axis mounts to follow the sun's path.",
          icon: TrackerSystemsIcon,
        },
        {
          name: "Energy Storage Integration",
          description:
            "Battery systems for peak shaving and backup power.",
          icon: EnergyStorageIntegrationIcon,
        },
      ],
    },

    {
      title: "Solar EPC Benefits",
      components: [
        {
          name: "Turnkey Simplicity",
          description:
            "Single-point responsibility reduces client coordination efforts.",
          icon: TurnkeySimplicityIcon,
        },
        {
          name: "Accelerated ROI",
          description:
            "Efficient execution shortens payback periods.",
          icon: AcceleratedRoiIcon,
        },
        {
          name: "Risk Reduction",
          description:
            "Expert handling minimizes delays and cost overruns.",
          icon: RiskReductionIcon,
        },
        {
          name: "Sustainability Impact",
          description:
            "Promotes clean energy adoption with measurable CO₂ savings.",
          icon: SustainabilityImpactIcon,
        },
        {
          name: "Customizable Solutions",
          description:
            "Adaptable to diverse project scales and requirements.",
          icon: CustomizableSolutionsIcon,
        },
      ],
    },
  ],
};


// Smart Biometric Data
export const smartBiometricData: Section = {
  title: "Secure Access Revolution: Smart Biometric and Facial Recognition",
  slug: "smart-biometric-facial-recognition",

  subsections: [
    {
      title: "Smart Biometric Overview",
      subPoints: [
        {
          title: "Touchless Authentication",
          description:
            "Eliminates physical contact for hygienic and convenient access control.",
        },
        {
          title: "High Accuracy Rates",
          description:
            "Advanced algorithms ensure low false positives and negatives.",
        },
        {
          title: "Multi-Modal Support",
          description:
            "Combines facial, fingerprint, iris, and voice for robust verification.",
        },
        {
          title: "Real-Time Processing",
          description:
            "Instant decisions with edge computing for low latency.",
        },
        {
          title: "Privacy-First Design",
          description:
            "Template-based storage protects sensitive biometric data.",
        },
      ],
    },

    {
      title: "What is Smart Biometric and Facial Recognition System?",
      description:
        "A Smart Biometric and Facial Recognition System uses AI-driven sensors to verify identities through unique physical or behavioral traits. It enables secure, frictionless access in environments like offices, airports, and smart cities, integrating with IoT for automated workflows and enhanced security.",
    },

    {
      title: "Core Components",
      components: [
        {
          name: "Facial Recognition Camera",
          description:
            "High-resolution sensors with liveness detection to prevent spoofing.",
          icon: FacialRecognitionCameraIcon,
        },
        {
          name: "Biometric Scanner",
          description:
            "Multi-sensor devices for fingerprint, iris, or palm vein capture.",
          icon: BiometricScannerIcon,
        },
        {
          name: "AI Processing Unit",
          description:
            "Onboard NPU for real-time matching against enrolled databases.",
          icon: AiProcessingUnitIcon,
        },
        {
          name: "Central Management Server",
          description:
            "Cloud or on-premise hub for enrollment, updates, and analytics.",
          icon: CentralManagementServerIcon,
        },
        {
          name: "Access Control Interface",
          description:
            "Integrates with doors, gates, or elevators for automated actions.",
          icon: AccessControlInterfaceIcon,
        },
        {
          name: "Mobile SDK",
          description:
            "Enables app-based biometric verification on smartphones.",
          icon: MobileSdkIcon,
        },
        {
          name: "Encryption Module",
          description:
            "Secures data transmission with AES-256 standards.",
          icon: EncryptionModuleIcon,
        },
        {
          name: "Audit Trail Logger",
          description:
            "Records all access events for compliance and forensics.",
          icon: AuditTrailLoggerIcon,
        },
        {
          name: "Integration API",
          description:
            "Connects to HR, security, or facility management systems.",
          icon: IntegrationApiIcon,
        },
        {
          name: "User Enrollment Kiosk",
          description:
            "Self-service stations for initial biometric registration.",
          icon: UserEnrollmentKioskIcon,
        },
      ],
    },

    {
      title: "Facial Recognition Features",
      components: [
        {
          name: "Liveness Detection",
          description:
            "Distinguishes real faces from photos or masks using 3D mapping.",
          icon: LivenessDetectionIcon,
        },
        {
          name: "Pose and Angle Tolerance",
          description:
            "Works with varying lighting, angles, and expressions.",
          icon: PoseAngleToleranceIcon,
        },
        {
          name: "Demographic Analytics",
          description:
            "Anonymized insights on footfall and demographics.",
          icon: DemographicAnalyticsIcon,
        },
        {
          name: "Watchlist Matching",
          description:
            "Alerts on persons of interest in real-time.",
          icon: WatchlistMatchingIcon,
        },
        {
          name: "Age and Emotion Estimation",
          description:
            "Additional layers for enhanced user experience.",
          icon: AgeEmotionEstimationIcon,
        },
        {
          name: "Multi-Face Detection",
          description:
            "Handles crowds by tracking multiple individuals simultaneously.",
          icon: MultiFaceDetectionIcon,
        },
      ],
    },

    {
      title: "Biometric Integration and Deployment",
      components: [
        {
          name: "Hybrid Authentication",
          description:
            "Fallback to PIN or RFID if biometrics fail.",
          icon: HybridAuthenticationIcon,
        },
        {
          name: "Scalable Enrollment",
          description:
            "Bulk import from existing databases for large organizations.",
          icon: ScalableEnrollmentIcon,
        },
        {
          name: "Remote Management",
          description:
            "Over-the-air updates and monitoring via dashboard.",
          icon: RemoteManagementIcon,
        },
        {
          name: "Edge vs. Cloud Processing",
          description:
            "Flexible deployment for offline or connected scenarios.",
          icon: EdgeVsCloudProcessingIcon,
        },
        {
          name: "Compliance Certifications",
          description:
            "Adheres to ISO, NIST, and regional privacy laws.",
          icon: ComplianceCertificationsIcon,
        },
        {
          name: "Battery Backup",
          description:
            "Ensures operation during power outages.",
          icon: BatteryBackupIcon,
        },
      ],
    },

    {
      title: "Smart Applications",
      components: [
        {
          name: "Time and Attendance Module",
          description:
            "Automates payroll with accurate biometric clock-ins.",
          icon: TimeAttendanceModuleIcon,
        },
        {
          name: "Border Control Integration",
          description:
            "Speeds up e-gates at airports and checkpoints.",
          icon: BorderControlIntegrationIcon,
        },
        {
          name: "Smart City Kiosks",
          description:
            "Public access points for services like payments or info.",
          icon: SmartCityKiosksIcon,
        },
        {
          name: "Healthcare Access",
          description:
            "Patient and staff verification in medical facilities.",
          icon: HealthcareAccessIcon,
        },
      ],
    },

    {
      title: "Smart Biometric Benefits",
      components: [
        {
          name: "Elevated Security",
          description:
            "Unbreakable against lost credentials or impersonation.",
          icon: ElevatedSecurityIcon,
        },
        {
          name: "User Convenience",
          description:
            "Passwordless, instant access improves daily workflows.",
          icon: UserConvenienceIcon,
        },
        {
          name: "Operational Efficiency",
          description:
            "Reduces fraud and manual verification overhead.",
          icon: OperationalEfficiencyIcon,
        },
        {
          name: "Scalability",
          description:
            "Easily expands to new sites or users.",
          icon: ScalabilityIcon,
        },
        {
          name: "Data Privacy",
          description:
            "Minimizes personal data exposure through advanced encryption.",
          icon: DataPrivacyIcon,
        },
      ],
    },
  ],
};


// ERP Software Data
export const erpSoftwareData: Section = {
  title: "Enterprise Transformation: Next-Gen ERP Software Systems",
  slug: "erp-software-system",

  subsections: [
    {
      title: "ERP Software Overview",
      subPoints: [
        {
          title: "Integrated Business Processes",
          description:
            "Unifies finance, HR, supply chain, and operations in one platform.",
        },
        {
          title: "Cloud-Native Architecture",
          description:
            "Scalable, secure access from anywhere with automatic updates.",
        },
        {
          title: "AI-Driven Insights",
          description:
            "Predictive analytics for smarter decision-making.",
        },
        {
          title: "Customizable Workflows",
          description:
            "Adaptable modules to fit unique business needs.",
        },
        {
          title: "Mobile-First Design",
          description:
            "Apps for on-the-go management and approvals.",
        },
      ],
    },

    {
      title: "What is ERP Software System?",
      description:
        "Enterprise Resource Planning (ERP) software is a centralized digital backbone that automates and integrates core business functions. It provides real-time visibility, streamlines operations, and supports growth by connecting disparate systems into a cohesive ecosystem for mid-to-large enterprises.",
    },

    {
      title: "Core Components",
      components: [
        {
          name: "Finance Module",
          description:
            "Accounting, budgeting, invoicing, and financial reporting tools.",
          icon: FinanceModuleIcon,
        },
        {
          name: "Human Resources Management",
          description:
            "Recruitment, payroll, performance tracking, and employee self-service.",
          icon: HrManagementIcon,
        },
        {
          name: "Supply Chain Management",
          description:
            "Inventory, procurement, logistics, and vendor portals.",
          icon: SupplyChainManagementIcon,
        },
        {
          name: "Manufacturing Module",
          description:
            "Production planning, quality control, and shop floor management.",
          icon: ManufacturingModuleIcon,
        },
        {
          name: "Customer Relationship Management",
          description:
            "Sales pipelines, lead tracking, and customer analytics.",
          icon: CrmIcon,
        },
        {
          name: "Analytics Dashboard",
          description:
            "KPI visualizations and custom reports with drill-down capabilities.",
          icon: AnalyticsDashboardIcon,
        },
        {
          name: "Workflow Automation Engine",
          description:
            "Rule-based approvals and task routing.",
          icon: WorkflowAutomationEngineIcon,
        },
        {
          name: "Integration Middleware",
          description:
            "Connects with CRM, e-commerce, or third-party apps via APIs.",
          icon: IntegrationMiddlewareIcon,
        },
        {
          name: "Security Framework",
          description:
            "Role-based access, encryption, and audit compliance.",
          icon: SecurityFrameworkIcon,
        },
        {
          name: "Asset Management",
          description:
            "Tracking of fixed assets, maintenance scheduling, and depreciation.",
          icon: AssetManagementIcon,
        },
      ],
    },

    {
      title: "Deployment and Customization",
      components: [
        {
          name: "Cloud, On-Premise, or Hybrid",
          description:
            "Flexible hosting options based on data sovereignty needs.",
          icon: CloudHybridIcon,
        },
        {
          name: "Low-Code Customization",
          description:
            "Drag-and-drop tools for non-developers to tailor interfaces.",
          icon: LowCodeCustomizationIcon,
        },
        {
          name: "Migration Services",
          description:
            "Seamless data transfer from legacy systems.",
          icon: MigrationServicesIcon,
        },
        {
          name: "User Training Academy",
          description:
            "Onboarding programs and certification tracks.",
          icon: UserTrainingAcademyIcon,
        },
        {
          name: "Scalability Features",
          description:
            "Auto-scaling resources for peak loads.",
          icon: ScalabilityFeaturesIcon,
        },
        {
          name: "Multi-Tenant Architecture",
          description:
            "Isolated environments for subsidiaries or clients.",
          icon: MultiTenantArchitectureIcon,
        },
      ],
    },

    {
      title: "Advanced ERP Features",
      components: [
        {
          name: "AI and Machine Learning",
          description:
            "Forecasting, anomaly detection, and chatbot assistants.",
          icon: AiMachineLearningIcon,
        },
        {
          name: "IoT Integration",
          description:
            "Real-time data from sensors for inventory and production.",
          icon: IotIntegrationIcon,
        },
        {
          name: "Blockchain for Traceability",
          description:
            "Secure supply chain auditing and contract management.",
          icon: BlockchainTraceabilityIcon,
        },
        {
          name: "Sustainability Tracking",
          description:
            "Carbon footprint reporting and ESG compliance.",
          icon: SustainabilityTrackingIcon,
        },
        {
          name: "Global Multi-Currency",
          description:
            "Handles international operations with currency conversions.",
          icon: GlobalMultiCurrencyIcon,
        },
      ],
    },

    {
      title: "Implementation Best Practices",
      description:
        "Phased rollouts with pilot testing ensure minimal disruption and high adoption rates.",
      featureLists: [
        {
          title: "Key Implementation Phases",
          items: [
            "Discovery and Planning",
            "Configuration and Testing",
            "Data Migration",
            "User Training",
            "Go-Live Support",
            "Continuous Optimization",
          ],
        },
      ],
    },

    {
      title: "Industry-Specific Modules",
      components: [
        {
          name: "Retail Extension",
          description:
            "POS integration and omnichannel inventory sync.",
          icon: RetailExtensionIcon,
        },
        {
          name: "Healthcare Suite",
          description:
            "Patient billing, compliance, and appointment scheduling.",
          icon: HealthcareSuiteIcon,
        },
        {
          name: "Construction Add-On",
          description:
            "Project costing, subcontractor management, and RFIs.",
          icon: ConstructionAddonIcon,
        },
      ],
    },

    {
      title: "ERP Software Benefits",
      components: [
        {
          name: "Process Efficiency",
          description:
            "Eliminates silos for faster operations and reduced errors.",
          icon: ProcessEfficiencyIcon,
        },
        {
          name: "Cost Reduction",
          description:
            "Automation cuts manual labor and overheads.",
          icon: CostReductionIcon,
        },
        {
          name: "Strategic Insights",
          description:
            "Real-time data empowers proactive business strategies.",
          icon: StrategicInsightsIcon,
        },
        {
          name: "Compliance Assurance",
          description:
            "Built-in controls for SOX, GDPR, and industry standards.",
          icon: ComplianceAssuranceIcon,
        },
        {
          name: "Agile Growth",
          description:
            "Supports expansion without proportional IT investments.",
          icon: AgileGrowthIcon,
        },
      ],
    },
  ],
};

/* ===================== ALL SOLUTIONS ===================== */

export const allSolutions: Section[] = [
  smartBusData,
  aiVmsData,
  solarEpcData,
  smartBiometricData,
  erpSoftwareData,
];

/* ===================== HELPERS ===================== */

export function getSolution(slug: string): Section | null {
  return allSolutions.find((s) => s.slug === slug) ?? null;
}

export function getAllSolutionSlugs(): { params: { slug: string } }[] {
  return allSolutions
    .filter((s) => s.slug)
    .map((s) => ({ params: { slug: s.slug! } }));
}