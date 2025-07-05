import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIframeLoad = () => {
    setIsActive(true);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">🎓</div>
            <div className="logo-text">
              <h1>Admissions Voice Assistant</h1>
              <p>Your AI-powered guide for course information and admissions</p>
            </div>
          </div>
          <div className="status-indicator">
            <div className={`status-dot ${isActive ? 'active' : ''}`}></div>
            <span>{isActive ? 'Assistant Ready' : 'Loading...'}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="content-wrapper">
          {/* Voice Assistant Section - Full Width */}
          <section className="voice-section">
            <div className="voice-card">
              <div className="card-header">
                <h2>🎤 Voice Assistant</h2>
                <div className="card-badge">Live</div>
              </div>
              
              <div className="iframe-container">
                <iframe
                  src="https://vapi.ai?demo=true&shareKey=522f8e3a-b484-450c-9cb6-79aafcd1e8f4&assistantId=0dded056-1e58-4af2-8dbb-afd3f2e85d0e"
                  title="Admissions Assistant"
                  width="100%"
                  height="500px"
                  allow="microphone"
                  className="assistant-iframe"
                  onLoad={handleIframeLoad}
                />
              </div>
            </div>
          </section>

          {/* Information Section - Below Voice Assistant */}
          <section className="info-section">
            <div className="info-grid">
              {/* How to Use Card */}
              <div className="info-card instructions-card">
                <div className="card-header">
                  <h2>💡 How to Use</h2>
                  <div className="card-icon">📚</div>
                </div>
                
                <div className="instructions">
                  <div className="instruction-item">
                    <div className="instruction-icon">🎤</div>
                    <div className="instruction-text">
                      <h3>Start Conversation</h3>
                      <p>Click the microphone icon to begin speaking with the assistant</p>
                    </div>
                  </div>
                  
                  <div className="instruction-item">
                    <div className="instruction-icon">📚</div>
                    <div className="instruction-text">
                      <h3>Ask About Courses</h3>
                      <p>Inquire about any course like "BCA", "MSc Animation", or "B.Tech"</p>
                    </div>
                  </div>
                  
                  <div className="instruction-item">
                    <div className="instruction-icon">💸</div>
                    <div className="instruction-text">
                      <h3>Fee Information</h3>
                      <p>Get detailed information about fees, scholarships, and payment options</p>
                    </div>
                  </div>
                  
                  <div className="instruction-item">
                    <div className="instruction-icon">🕐</div>
                    <div className="instruction-text">
                      <h3>End Call</h3>
                      <p>End the conversation anytime when you're done</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="quick-info-section">
                <div className="quick-info-card">
                  <div className="quick-info-icon">🎯</div>
                  <h3>Popular Courses</h3>
                  <p>BCA, MCA, B.Tech, MSc Animation</p>
                </div>
                
                <div className="quick-info-card">
                  <div className="quick-info-icon">💰</div>
                  <h3>Scholarships</h3>
                  <p>Merit-based and need-based options</p>
                </div>
                
                <div className="quick-info-card">
                  <div className="quick-info-icon">📅</div>
                  <h3>Admissions</h3>
                  <p>Open for 2025-26 academic year</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>© 2025 Admissions Assistant</p>
            <p>Built by Yash Patil</p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <span>Courses</span>
              <span>•</span>
              <span>Fees</span>
              <span>•</span>
              <span>Admissions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
