import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { FileText, Users, Shield, AlertTriangle, RefreshCw, Mail } from "lucide-react";

const EditorialPolicy = () => {
  useSeo({
    title: "Editorial Policy | Content Standards | Khelo24Id.live",
    description: "Read Khelo24Id.live's editorial policy. Learn about our content standards, accuracy commitment, responsible gambling messaging, and how we maintain trust.",
    canonical: "/editorial-policy",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Editorial Policy" }]} />
      
      <article className="container py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Editorial <span className="text-gradient-gold">Policy</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          At Khelo24Id.live, we are committed to providing accurate, helpful, and responsible content to our users. This policy outlines our standards and practices.
        </p>

        <div className="prose prose-invert max-w-none space-y-10">
          {/* Our Commitment */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Commitment to Quality</h2>
                <p className="text-muted-foreground">
                  We believe that our users deserve accurate, clear, and helpful information. Every piece of content on Khelo24Id.live is created with the goal of helping users make informed decisions about their gaming experience.
                </p>
              </div>
            </div>
          </section>

          {/* Content Standards */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Content Standards</h2>
                <p className="text-muted-foreground mb-4">
                  All content published on our platform adheres to the following standards:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Accuracy:</strong> We verify all factual claims and statistics before publication. Game rules, odds explanations, and platform features are reviewed for accuracy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Clarity:</strong> Content is written in clear, simple language accessible to all users regardless of their experience level with online gaming.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Honesty:</strong> We do not make false promises or misleading claims about winning potential. Gaming involves risk, and we communicate this clearly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong className="text-foreground">Relevance:</strong> Content is regularly reviewed and updated to ensure it remains current and useful to our users.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Responsible Gambling */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Responsible Gambling Messaging</h2>
                <p className="text-muted-foreground mb-4">
                  Responsible gambling is at the core of our editorial approach. We commit to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Never encouraging users to gamble beyond their means</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Avoiding language that suggests gambling is a way to make money or solve financial problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Including responsible gambling reminders in promotional content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Providing clear links to responsible gambling resources and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Not targeting vulnerable individuals or minors</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Review Process */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Content Review Process</h2>
                <p className="text-muted-foreground mb-4">
                  Our content goes through a multi-step review process:
                </p>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span><strong className="text-foreground">Creation:</strong> Content is created by team members with knowledge of the gaming industry and our platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span><strong className="text-foreground">Fact-Check:</strong> All factual claims, statistics, and game rules are verified before publication.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span><strong className="text-foreground">Compliance Review:</strong> Content is reviewed for responsible gambling compliance and legal requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span><strong className="text-foreground">Regular Updates:</strong> Published content is periodically reviewed and updated to maintain accuracy.</span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* What We Don't Do */}
          <section>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
              <h2 className="text-xl font-bold mb-4 text-red-400">What We Don't Do</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We do not guarantee winnings or make promises about outcomes</li>
                <li>• We do not create content that targets minors or vulnerable individuals</li>
                <li>• We do not publish misleading information about odds or probabilities</li>
                <li>• We do not use manipulative language to pressure users into gambling</li>
                <li>• We do not hide important terms, conditions, or risks</li>
              </ul>
            </div>
          </section>

          {/* User-Generated Content */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">User Feedback</h2>
                <p className="text-muted-foreground">
                  We value feedback from our users. If you notice any inaccurate information, outdated content, or have suggestions for improvement, please contact our support team. We take all feedback seriously and use it to improve our content.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our editorial policy or want to report an issue with our content, please reach out to our support team via WhatsApp. We are committed to maintaining the highest standards and appreciate your help in doing so.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> June 2026
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This policy is reviewed and updated periodically to ensure it reflects our current practices and standards.
            </p>
          </section>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default EditorialPolicy;
