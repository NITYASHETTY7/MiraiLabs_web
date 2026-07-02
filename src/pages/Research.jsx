import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Network, 
  Lock, 
  ShieldCheck, 
  Database, 
  Cloud, 
  GitBranch, 
  Star, 
  Activity,
  PlayCircle
} from 'lucide-react';
import styles from './Pages.module.css';

export const Research = () => {
  return (
    <div className={styles.resWrapper}>
      
      {/* 1. Hero */}
      <section className={styles.resHero}>
        <div className={styles.resHeroBg} />
        <div className={styles.resHeroGrid} />
        <div className={styles.resContainer}>
          <motion.div 
            className={styles.resHeroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.resHeroTag}>SYSTEMS_ENGINEERING_v2.0</div>
            <h1 className={styles.resHeroTitle}>Where Ideas Become Infrastructure</h1>
            <p className={styles.resHeroSubtitle}>
              We are an engineering-driven company building next-generation AI and Cloud solutions. 
              Explore our research, open-source projects, and technical experiments.
            </p>
            <div className={styles.resHeroActions}>
              <a href="#playbooks" className={styles.resBtnPrimary}>
                Read Playbooks <ArrowRight size={20} />
              </a>
              <a href="#opensource" className={styles.resBtnSecondary}>
                View GitHub <GitBranch size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Research */}
      <section className={styles.resSection}>
        <div className={styles.resContainer}>
          <h2 className={styles.resSectionTitle}>Featured Research</h2>
          <p className={styles.resSectionDesc}>
            Deep dives into our most ambitious technical challenges and architectural breakthroughs.
          </p>
          
          <div className={styles.resFeaturedCards}>
            <motion.div 
              className={styles.resFeaturedCard}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className={styles.resFeaturedVisual}>
                <div className={styles.resTerminal}>
                  <div className={styles.resTermHeader}>
                    <div className={`${styles.resTermDot} ${styles.r}`} />
                    <div className={`${styles.resTermDot} ${styles.y}`} />
                    <div className={`${styles.resTermDot} ${styles.g}`} />
                  </div>
                  <div className={styles.resTermBody}>
                    <div><span className={styles.resTermPrompt}>mirai@cloud:~$</span> <span className={styles.resTermCmd}>./deploy-multi-agent-system</span></div>
                    <div className={styles.resTermOutput}>Initializing 10,000 agents...</div>
                    <div className={styles.resTermOutput}>Connecting to Redis cluster...</div>
                    <div className={styles.resTermOutput}>Establishing message broker topology...</div>
                    <div className={styles.resTermSuccess}>[SUCCESS] System running with 0.2ms latency.</div>
                  </div>
                </div>
              </div>
              <div className={styles.resFeaturedContent}>
                <div className={styles.resFCBadge}>01 // DISTRIBUTED SYSTEMS</div>
                <h3 className={styles.resFCTitle}>Multi-Agent Systems at Scale</h3>
                <p className={styles.resFCDesc}>
                  Our research into orchestrating tens of thousands of autonomous agents with sub-millisecond communication overhead. We explore novel message brokering topologies and conflict resolution protocols.
                </p>
                <div className={styles.resFCTech}>
                  <span className={styles.resTechTag}>Golang</span>
                  <span className={styles.resTechTag}>Redis</span>
                  <span className={styles.resTechTag}>gRPC</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.resFeaturedCard}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className={styles.resFeaturedVisual}>
                <div className={styles.resArchDiagram}>
                  <div className={styles.resArchRow}>
                    <div className={styles.resArchNode}>
                      <Cloud className={styles.resArchNodeIcon} size={24} />
                      <span className={styles.resArchNodeLabel}>API Gateway</span>
                    </div>
                  </div>
                  <div className={styles.resArchLineV} />
                  <div className={styles.resArchRow}>
                    <div className={styles.resArchNode}>
                      <Cpu className={styles.resArchNodeIcon} size={24} />
                      <span className={styles.resArchNodeLabel}>Compute Node</span>
                    </div>
                    <div className={styles.resArchNode}>
                      <Database className={styles.resArchNodeIcon} size={24} />
                      <span className={styles.resArchNodeLabel}>Vector DB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.resFeaturedContent}>
                <div className={styles.resFCBadge}>02 // AI INFRASTRUCTURE</div>
                <h3 className={styles.resFCTitle}>Enterprise RAG Architectures</h3>
                <p className={styles.resFCDesc}>
                  Designing Retrieval-Augmented Generation systems that can securely index petabytes of enterprise data while maintaining real-time response rates and strict access controls.
                </p>
                <div className={styles.resFCTech}>
                  <span className={styles.resTechTag}>Python</span>
                  <span className={styles.resTechTag}>Pinecone</span>
                  <span className={styles.resTechTag}>Kubernetes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 4. Open Source */}
      <section className={styles.resSection} id="opensource">
        <div className={styles.resContainer}>
          <h2 className={styles.resSectionTitle}>Open Source Contributions</h2>
          <p className={styles.resSectionDesc}>
            We believe in giving back. Here are some of our foundational tools and frameworks.
          </p>
          
          <div className={styles.resOSGrid}>
            {[
              { name: "mirai/nexus-router", desc: "High-performance edge router for GraphQL federation.", stars: "4.2k", forks: "320" },
              { name: "mirai/agent-sdk", desc: "Framework for building deterministic multi-agent workflows.", stars: "8.9k", forks: "1.1k" },
              { name: "mirai/cloud-cli", desc: "Rust-based CLI for deploying immutable infrastructure.", stars: "2.1k", forks: "180" },
              { name: "mirai/secure-vault", desc: "Distributed secret management for Kubernetes environments.", stars: "5.5k", forks: "440" }
            ].map((repo, i) => (
              <div key={i} className={styles.resRepoCard}>
                <div className={styles.resRepoHeader}>
                  <div className={styles.resRepoName}><GitBranch size={16} /> {repo.name}</div>
                  <div className={styles.resRepoBadge}>Public</div>
                </div>
                <p className={styles.resRepoDesc}>{repo.desc}</p>
                <div className={styles.resRepoMeta}>
                  <div className={styles.resRepoMetaItem}><Star size={14} /> {repo.stars}</div>
                  <div className={styles.resRepoMetaItem}><GitBranch size={14} /> {repo.forks}</div>
                  <div className={styles.resRepoMetaItem}>TypeScript</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.resContribGraph}>
            <h4 className={styles.resCGTitle}>1,402 contributions in the last year</h4>
            <div className={styles.resCGGrid}>
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const levels = ["", "lvl1", "lvl2", "lvl3", "lvl4"];
                const randLevel = levels[Math.floor(Math.random() * (i % 7 === 0 ? 5 : 3))];
                return <div key={i} className={`${styles.resCGDay} ${randLevel ? styles[randLevel] : ''}`} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Code & Architecture */}
      <section className={`${styles.resSection} ${styles.resSectionBorder}`}>
        <div className={styles.resContainer}>
          <div className={styles.resFeaturedCards}>
            <div className={styles.resFeaturedCard} style={{ flexDirection: 'row-reverse' }}>
              <div className={styles.resFeaturedVisual}>
                <div className={styles.resCodeMockup}>
<pre><code><span className={styles.resCodeKeyword}>import</span> {'{'} <span className={styles.resCodeClass}>Agent</span>, <span className={styles.resCodeClass}>Task</span> {'}'} <span className={styles.resCodeKeyword}>from</span> <span className={styles.resCodeString}>'@mirai/agent-sdk'</span>;

<span className={styles.resCodeComment}>// Initialize a specialized security agent</span>
<span className={styles.resCodeKeyword}>const</span> auditor = <span className={styles.resCodeKeyword}>new</span> <span className={styles.resCodeClass}>Agent</span>({'{'}
  role: <span className={styles.resCodeString}>'Security Auditor'</span>,
  model: <span className={styles.resCodeString}>'gpt-4'</span>,
  tools: [<span className={styles.resCodeString}>'CodeScanner'</span>, <span className={styles.resCodeString}>'DependencyChecker'</span>]
{'}'});

<span className={styles.resCodeKeyword}>async function</span> <span className={styles.resCodeMethod}>runAudit</span>() {'{'}
  <span className={styles.resCodeKeyword}>const</span> task = <span className={styles.resCodeKeyword}>new</span> <span className={styles.resCodeClass}>Task</span>(<span className={styles.resCodeString}>'Audit core services'</span>);
  <span className={styles.resCodeKeyword}>const</span> result = <span className={styles.resCodeKeyword}>await</span> auditor.<span className={styles.resCodeMethod}>execute</span>(task);
  <span className={styles.resCodeClass}>console</span>.<span className={styles.resCodeMethod}>log</span>(result.vulnerabilities);
{'}'}
</code></pre>
                </div>
              </div>
              <div className={styles.resFeaturedContent}>
                <h2 className={styles.resSectionTitle}>Developer Experience First</h2>
                <p className={styles.resSectionDesc} style={{ marginBottom: 0 }}>
                  We build tools that engineers actually want to use. Our SDKs and APIs are designed with strong typing, predictable behaviors, and comprehensive documentation to accelerate development cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Engineering Experiments */}
      <section className={styles.resSection}>
        <div className={styles.resContainer}>
          <h2 className={styles.resSectionTitle}>Experiments &amp; Prototypes</h2>
          <p className={styles.resSectionDesc}>
            Cutting-edge prototypes from our internal hackathons and R&D labs.
          </p>
          
          <div className={styles.resExpGrid}>
            {[
              {
                img: '/images/research/exp_neural_network.jpg',
                icon: <Network color="#0ea5e9" size={52} />,
                title: 'Neural Network Topology Visualizer',
                desc: 'A WebGL-based tool for rendering real-time activation states of large language models in browser.'
              },
              {
                img: '/images/research/exp_quantum_crypto.jpg',
                icon: <Lock color="#a78bfa" size={52} />,
                title: 'Quantum-Resistant Key Exchange',
                desc: 'Implementation of lattice-based cryptography for securing internal microservice communication.'
              },
              {
                img: '/images/research/exp_voice_infra.jpg',
                icon: <PlayCircle color="#34d399" size={52} />,
                title: 'Voice-Driven Infrastructure',
                desc: 'Experimental CLI replacement that parses natural language audio into Terraform state changes.'
              },
              {
                img: '/images/research/exp_wasm_edge.jpg',
                icon: <Terminal color="#fb923c" size={52} />,
                title: 'WASM Edge Compute',
                desc: 'Running complete AI inference engines at the edge using WebAssembly for zero-latency responses.'
              }
            ].map((exp, i) => (
              <div key={i} className={styles.resExpCard}>
                <div
                  className={styles.resExpVisual}
                  style={{
                    backgroundImage: `url(${exp.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={styles.resExpVisualOverlay} />
                  <div className={styles.resExpIconWrap}>{exp.icon}</div>
                </div>
                <div className={styles.resExpInfo}>
                  <h3 className={styles.resExpTitle}>{exp.title}</h3>
                  <p className={styles.resExpDesc}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. CTA */}
      <section className={styles.resSection}>
        <div className={styles.resContainer}>
          <div className={styles.resCTABox}>
            <div
              className={styles.resCTABgImg}
              style={{ backgroundImage: "url('/images/research/cta_team.jpg')" }}
            />
            <div className={styles.resCTAContent}>
              <h2 className={styles.resCTATitle}>Build the Future with Us</h2>
              <p className={styles.resCTADesc}>
                We are always looking for exceptional engineers, researchers, and designers to join our team.
              </p>
              <a href="#" className={styles.resBtnPrimary}>
                View Open Roles
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
