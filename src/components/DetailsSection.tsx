import { motion } from "framer-motion";

const techStack = ["Lovable", "Node.js", "Next.js", "React"];

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Project Description
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Built a modern, responsive careers portal for Recruitment
                department of WOW Corporation, an international outsourcing and
                contact center company operating in Ukraine (Dnipro,
                Zaporizhzhia), Bulgaria (Plovdiv), and Azerbaijan (Baku).
              </p>
              <p>
                The site showcases company values, team benefits, success
                stories, and current job openings.
              </p>
              <p>
                Designed to attract talent efficiently, highlight a supportive
                work environment, and drive applications in the competitive BPO
                industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Timeline
              </h3>
              <p className="text-muted-foreground">1 daya (January 2026)</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                My Role
              </h3>
              <p className="text-muted-foreground">Website developer</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://job.wow-corp.com/"
                  className="text-primary hover:underline font-medium"
                >
                  Live → wow-corp.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
