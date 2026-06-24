import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <div className="relative w-full pt-32 pb-24 bg-white overflow-hidden text-left min-h-screen">
      {/* Background Gradients */}
      <div className="glow-spot glow-blue w-[700px] h-[700px] -top-20 -left-20" />
      <div className="glow-spot glow-purple w-[600px] h-[600px] top-1/3 right-0" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600">
            <span>Legal</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-base font-light">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-slate max-w-none"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8 text-slate-700 font-light leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of LuminaVTech, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900">2. Provision of Services</h2>
              <p>
                LuminaVTech provides IT staffing, consulting, and associated technology services. You agree and acknowledge that LuminaVTech is entitled to modify, improve or discontinue any of its services at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information contained in it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900">3. Proprietary Rights</h2>
              <p>
                You acknowledge and agree that LuminaVTech may contain proprietary and confidential information including trademarks, service marks and patents protected by intellectual property laws and international intellectual property treaties. Our content may not be sold, reproduced, or distributed without our written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900">4. Limitation of Liability</h2>
              <p>
                You understand and agree that LuminaVTech and any of its subsidiaries or affiliates shall in no event be liable for any direct, indirect, incidental, consequential, or exemplary damages. This shall include, but not be limited to damages for loss of profits, business interruption, business reputation or goodwill, loss of programs or information or other intangible loss arising out of the use of or the inability to use the service, or information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold font-display text-slate-900">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
