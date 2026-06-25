import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Cpu,
  Terminal,
  Code2,
  GitBranch,
  Brain,
  LineChart,
  ShieldCheck,
  BarChart2,
  Layers,
  Activity,
  Cloud,
  Building2,
  FileSpreadsheet,
  Database,
  Coffee,
  ArrowRight
} from 'lucide-react'

export default function Technologies() {
  const navigate = useNavigate()

  const techStack = [
    {
      id: 1,
      title: 'Generative AI & LLM Solutions',
      icon: Sparkles,
      desc: 'Architecting advanced LLM integrations, retrieval-augmented generation (RAG) models, and smart agent architectures to automate cognitive workflows.',
      tags: ['LLMs', 'RAG', 'Prompt Engineering', 'LangChain']
    },
    {
      id: 2,
      title: 'Artificial Intelligence (AI)',
      icon: Cpu,
      desc: 'Deploying intelligent systems, deep learning models, and computer vision technologies to solve complex decision-making challenges.',
      tags: ['Neural Networks', 'Computer Vision', 'NLP', 'TensorFlow']
    },
    {
      id: 3,
      title: 'Python Full Stack',
      icon: Terminal,
      desc: 'Developing highly-scalable backend services, web applications, and fast APIs using robust frameworks like Django, FastAPI, and Flask.',
      tags: ['FastAPI', 'Django', 'Flask', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'React & Frontend Development',
      icon: Code2,
      desc: 'Building high-performance, responsive interfaces using modern React ecosystem libraries, Next.js, state management, and modern styling.',
      tags: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      id: 5,
      title: 'DevOps Engineering',
      icon: GitBranch,
      desc: 'Establishing modern CI/CD pipelines, container orchestration with Kubernetes, and infrastructure-as-code to streamline software delivery.',
      tags: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS']
    },
    {
      id: 6,
      title: 'Machine Learning (ML)',
      icon: Brain,
      desc: 'Designing, training, and deploying predictive models, regression algorithms, and custom ML pipelines for enterprise systems.',
      tags: ['Supervised Learning', 'PyTorch', 'Scikit-Learn', 'MLOps']
    },
    {
      id: 7,
      title: 'Data Scientist',
      icon: LineChart,
      desc: 'Uncovering hidden business patterns, building predictive statistical models, and translating raw data datasets into strategic insights.',
      tags: ['Data Modeling', 'R', 'Pandas', 'Statistical Analysis']
    },
    {
      id: 8,
      title: 'Cybersecurity',
      icon: ShieldCheck,
      desc: 'Securing digital assets, establishing zero-trust architectures, and implementing vulnerability scanning to protect enterprise systems from threats.',
      tags: ['Penetration Testing', 'SIEM', 'IAM', 'Zero-Trust']
    },
    {
      id: 9,
      title: 'Data Analyst',
      icon: BarChart2,
      desc: 'Creating interactive dashboard visualizations, compiling business intelligence metrics, and evaluating operational data trends.',
      tags: ['PowerBI', 'Tableau', 'SQL', 'Excel Reporting']
    },
    {
      id: 10,
      title: 'ServiceNow Development',
      icon: Layers,
      desc: 'Optimizing IT Service Management (ITSM), automating workflows, and building custom portals within the ServiceNow cloud platform.',
      tags: ['ITSM', 'ITOM', 'Workflow Automation', 'Service Portal']
    },
    {
      id: 11,
      title: 'QA Automation',
      icon: Activity,
      desc: 'Implementing automated test suites, end-to-end integration testing, and performance testing with Selenium, Playwright, and Cypress.',
      tags: ['Selenium', 'Cypress', 'Playwright', 'API Testing']
    },
    {
      id: 12,
      title: 'Salesforce Development',
      icon: Cloud,
      desc: 'Configuring CRM solutions, writing Apex code, building Lightning Web Components, and integrating third-party systems.',
      tags: ['LWC', 'Apex', 'Sales Cloud', 'Service Cloud']
    },
    {
      id: 13,
      title: 'SAP Solutions',
      icon: Building2,
      desc: 'Deploying, configuring, and maintaining enterprise resource planning (ERP) modules, custom ABAP workflows, and SAP HANA migrations.',
      tags: ['SAP S/4HANA', 'ABAP', 'SAP Fiori', 'ERP Integration']
    },
    {
      id: 14,
      title: 'Business Analysis',
      icon: FileSpreadsheet,
      desc: 'Bridging business needs and engineering execution with clear requirements, user story backlogs, and agile system specifications.',
      tags: ['Agile', 'Scrum', 'Jira', 'User Stories', 'BRDs']
    },
    {
      id: 15,
      title: 'Data Engineering',
      icon: Database,
      desc: 'Building high-volume ETL pipelines, warehousing data architectures with Snowflake/BigQuery, and maintaining secure data lakes.',
      tags: ['ETL Pipelines', 'Snowflake', 'Apache Spark', 'Airflow']
    },
    {
      id: 16,
      title: 'Java Full Stack',
      icon: Coffee,
      desc: 'Developing enterprise-grade microservices, distributed systems, and secure backend platforms with Spring Boot and Angular/React.',
      tags: ['Spring Boot', 'Microservices', 'Hibernate', 'Angular / React']
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-12 bg-gray-200 overflow-hidden text-left">
      {/* Background Gradients */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[600px] h-[600px] top-1/3 right-0" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>Our Tech Expertise</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Next-Gen Technology{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Capabilities
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            Harness the power of leading-edge technologies. We supply specialized engineering talent and implement custom consulting solutions across major enterprise verticals.
          </p>
        </motion.div>
      </div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => {
            const IconComp = tech.icon
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="p-6 rounded-2xl bg-white border-slate-200 shadow-xl flex flex-col justify-between group hover:border-blue-500/20 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Micro glow spot */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-lg group-hover:bg-blue-500/15 transition-all" />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-400 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {tech.desc}
                    </p>
                  </div>
                </div>

                {/* Sub-tags */}
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {tech.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[9px] font-semibold text-slate-500 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                    className="flex items-center gap-1 text-[10px] font-semibold text-blue-500 group-hover:text-blue-400 hover:underline pt-1"
                  >
                    <span>Request Developers</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-slate-100 border border-slate-300 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900">Looking for specialized technology expertise?</h3>
            <p className="text-sm text-slate-500 font-light max-w-xl">
              Partner with LuminaVTech to access elite developers, engineers, and specialists across our tech stacks.
            </p>
          </div>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-xs tracking-wider uppercase text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Request Staffing
          </button>
        </div>
      </div>
    </div>
  )
}
