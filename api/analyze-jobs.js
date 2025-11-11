// ==================== ENHANCED DATA DATABASE ====================
const companyDomains = {
  // Tech Giants (Global)
  "Google": ["@google.com", "@careers.google.com"],
  "Microsoft": ["@microsoft.com"],
  "Amazon": ["@amazon.com", "@amazon.jobs"],
  "Apple": ["@apple.com"],
  "Meta": ["@meta.com", "@fb.com"],
  "Netflix": ["@netflix.com"],
  "Twitter": ["@twitter.com", "@x.com"],
  "LinkedIn": ["@linkedin.com"],
  "Uber": ["@uber.com"],
  "Airbnb": ["@airbnb.com"],
  
  // Indian IT Services (Major)
  "TCS": ["@tcs.com", "@tata.com"],
  "Infosys": ["@infosys.com"],
  "Wipro": ["@wipro.com"],
  "HCL": ["@hcl.com"],
  "Tech Mahindra": ["@techmahindra.com"],
  "Mindtree": ["@mindtree.com"],
  "L&T Infotech": ["@lntinfotech.com"],
  "Mphasis": ["@mphasis.com"],
  "Hexaware": ["@hexaware.com"],
  "Persistent": ["@persistent.com"],
  
  // Consulting & Services (Global)
  "Accenture": ["@accenture.com"],
  "Capgemini": ["@capgemini.com"],
  "Cognizant": ["@cognizant.com"],
  "Deloitte": ["@deloitte.com"],
  "EY": ["@ey.com"],
  "KPMG": ["@kpmg.com"],
  "PwC": ["@pwc.com"],
  "McKinsey": ["@mckinsey.com"],
  "BCG": ["@bcg.com"],
  "Bain": ["@bain.com"],
  
  // Product Companies (Tech)
  "Adobe": ["@adobe.com"],
  "Intel": ["@intel.com"],
  "IBM": ["@ibm.com"],
  "Oracle": ["@oracle.com"],
  "Cisco": ["@cisco.com"],
  "SAP": ["@sap.com"],
  "Salesforce": ["@salesforce.com"],
  "VMware": ["@vmware.com"],
  "NVIDIA": ["@nvidia.com"],
  "Qualcomm": ["@qualcomm.com"],
  
  // Indian Startups & Unicorns
  "Flipkart": ["@flipkart.com"],
  "Paytm": ["@paytm.com"],
  "Ola": ["@olacabs.com", "@ola.com"],
  "Swiggy": ["@swiggy.com"],
  "Zomato": ["@zomato.com"],
  "Byju's": ["@byjus.com"],
  "PhonePe": ["@phonepe.com"],
  "Razorpay": ["@razorpay.com"],
  "Cred": ["@cred.com"],
  "Unacademy": ["@unacademy.com"],
  
  // Banking & Finance
  "HDFC Bank": ["@hdfc.com", "@hdfcbank.com"],
  "ICICI Bank": ["@icici.com", "@icicibank.com"],
  "Axis Bank": ["@axisbank.com"],
  "Kotak Bank": ["@kotak.com"],
  "SBI": ["@sbi.co.in"],
  "Yes Bank": ["@yesbank.com"],
  "PayPal": ["@paypal.com"],
  "Mastercard": ["@mastercard.com"],
  "Visa": ["@visa.com"],
  
  // Automotive & Manufacturing
  "Tata Motors": ["@tatamotors.com"],
  "Mahindra": ["@mahindra.com"],
  "Maruti Suzuki": ["@maruti.co.in"],
  "Hyundai": ["@hyundai.com"],
  "Toyota": ["@toyota.com"],
  
  // E-commerce & Retail
  "Myntra": ["@myntra.com"],
  "Nykaa": ["@nykaa.com"],
  "BigBasket": ["@bigbasket.com"],
  "Reliance Retail": ["@relianceretail.com"],
  "DMart": ["@dmart.com"]
};

// ENHANCED SALARY DATA WITH SPECIFIC JOB ROLES
const salaryData = {
  // Engineering Roles
  "Software Engineer": { 
    fresher: { min: 400000, max: 800000, typical: 550000 },
    intern: { min: 15000, max: 30000, typical: 20000 },
    experienced: { min: 800000, max: 1500000, typical: 1200000 }
  },
  "Frontend Developer": { 
    fresher: { min: 350000, max: 700000, typical: 500000 },
    intern: { min: 12000, max: 25000, typical: 18000 },
    experienced: { min: 700000, max: 1400000, typical: 1000000 }
  },
  "Backend Developer": { 
    fresher: { min: 400000, max: 850000, typical: 600000 },
    intern: { min: 15000, max: 30000, typical: 22000 },
    experienced: { min: 850000, max: 1600000, typical: 1200000 }
  },
  "Full Stack Developer": { 
    fresher: { min: 450000, max: 900000, typical: 650000 },
    intern: { min: 18000, max: 32000, typical: 25000 },
    experienced: { min: 900000, max: 1800000, typical: 1300000 }
  },
  "DevOps Engineer": { 
    fresher: { min: 500000, max: 950000, typical: 700000 },
    intern: { min: 20000, max: 35000, typical: 28000 },
    experienced: { min: 950000, max: 2000000, typical: 1500000 }
  },

  // Data Roles
  "Data Scientist": { 
    fresher: { min: 600000, max: 1100000, typical: 800000 },
    intern: { min: 25000, max: 40000, typical: 32000 },
    experienced: { min: 1100000, max: 2200000, typical: 1600000 }
  },
  "Data Analyst": { 
    fresher: { min: 350000, max: 700000, typical: 500000 },
    intern: { min: 15000, max: 28000, typical: 20000 },
    experienced: { min: 700000, max: 1400000, typical: 1000000 }
  },
  "Machine Learning Engineer": { 
    fresher: { min: 650000, max: 1200000, typical: 900000 },
    intern: { min: 28000, max: 45000, typical: 35000 },
    experienced: { min: 1200000, max: 2500000, typical: 1800000 }
  },
  "Business Analyst": { 
    fresher: { min: 400000, max: 750000, typical: 550000 },
    intern: { min: 15000, max: 30000, typical: 22000 },
    experienced: { min: 750000, max: 1500000, typical: 1100000 }
  },

  // Management & Consulting
  "Product Manager": { 
    fresher: { min: 600000, max: 1100000, typical: 800000 },
    intern: { min: 25000, max: 40000, typical: 32000 },
    experienced: { min: 1100000, max: 2200000, typical: 1600000 }
  },
  "Project Manager": { 
    fresher: { min: 500000, max: 900000, typical: 700000 },
    intern: { min: 20000, max: 35000, typical: 28000 },
    experienced: { min: 900000, max: 1800000, typical: 1300000 }
  }
};

// JOB ROLE KEYWORDS FOR AUTO-DETECTION
const jobRoleKeywords = {
  "Software Engineer": ["software engineer", "software developer", "sde", "development engineer"],
  "Frontend Developer": ["frontend", "front end", "react", "angular", "vue", "javascript developer"],
  "Backend Developer": ["backend", "back end", "node", "python", "java", "server side"],
  "Full Stack Developer": ["full stack", "fullstack", "mern", "mean"],
  "Data Scientist": ["data scientist", "data science", "machine learning", "ai engineer"],
  "Data Analyst": ["data analyst", "business intelligence", "bi analyst", "data reporting"],
  "Machine Learning Engineer": ["machine learning", "ml engineer", "ai engineer", "deep learning"],
  "Business Analyst": ["business analyst", "ba", "requirements analyst"],
  "DevOps Engineer": ["devops", "cloud engineer", "aws", "azure", "infrastructure"],
  "Product Manager": ["product manager", "product owner", "product management"],
  "Project Manager": ["project manager", "project lead", "technical project manager"]
};

// COMPANY DETECTION KEYWORDS
const companyKeywords = {
  "Google": ["google", "goggle", "googl"],
  "Microsoft": ["microsoft", "msft"],
  "Amazon": ["amazon", "amzn"],
  "TCS": ["tcs", "tata consultancy"],
  "Infosys": ["infosys", "infy"],
  "Wipro": ["wipro"],
  "Accenture": ["accenture", "acn"],
  "Flipkart": ["flipkart"],
  "Paytm": ["paytm"],
  "Ola": ["ola", "olacabs"],
  "Swiggy": ["swiggy"],
  "Zomato": ["zomato"],
  "Byju's": ["byju", "byjus"],
  "HDFC Bank": ["hdfc", "hdfc bank"],
  "ICICI Bank": ["icici", "icici bank"]
};

// ENHANCED SCAM PATTERNS
const scamPatterns = {
  highRisk: [
    { pattern: /send.*money|wire.*transfer|processing.*fee/i, score: 3, message: "Asks for money transfer" },
    { pattern: /security.*deposit|registration.*amount/i, score: 3, message: "Requests security deposit" },
    { pattern: /\$(\d+)|₹(\d+)|RS?\.?\s*(\d+)/i, score: 2, message: "Mentions specific money amount" },
    { pattern: /bank.*details|account.*number|upi.*id/i, score: 3, message: "Asks for bank/account details" },
    { pattern: /bitcoin|crypto|etherium/i, score: 3, message: "Requests cryptocurrency payment" }
  ],
  mediumRisk: [
    { pattern: /urgent.*hiring|immediate.*joining/i, score: 2, message: "Uses urgency pressure" },
    { pattern: /work.*from.*home|wfh.*job/i, score: 1, message: "Work from home offer" },
    { pattern: /no.*experience.*needed|fresher.*20.*lpa/i, score: 2, message: "Unrealistic offer for freshers" },
    { pattern: /part.*time.*job|earn.*money.*online/i, score: 2, message: "Part-time/online money making offer" },
    { pattern: /guaranteed.*job|100%.*placement/i, score: 1, message: "Makes guaranteed job promises" }
  ],
  lowRisk: [
    { pattern: /kindly.*provide|asap/i, score: 1, message: "Uses suspicious language" },
    { pattern: /limited.*vacancy|few.*seats/i, score: 1, message: "Limited availability claim" },
    { pattern: /congratulations|selected.*for/i, score: 1, message: "Premature congratulation/selection" },
    { pattern: /referral.*code|promo.*code/i, score: 1, message: "Requests referral/promo codes" }
  ]
};

// ==================== CORS HANDLER ====================
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

// ==================== MAIN ANALYSIS FUNCTION ====================
const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { text, experience = "fresher" } = req.body;
      
      if (!text) {
        return res.status(400).json({ error: 'No job text provided' });
      }
      
      const analysis = {
        redFlags: [],
        riskScore: 0,
        salaryAnalysis: null,
        companyAnalysis: null,
        detectedJobRole: null,
        recommendations: [],
        analyzedAt: new Date().toISOString()
      };

      const textLower = text.toLowerCase();

      // 1. Check scam patterns
      Object.values(scamPatterns).forEach(category => {
        category.forEach(({ pattern, score, message }) => {
          if (pattern.test(text)) {
            analysis.redFlags.push(message);
            analysis.riskScore += score;
          }
        });
      });

      // 2. Auto-detect job role and analyze salary
      let detectedRole = "Software Engineer";
      for (const [role, keywords] of Object.entries(jobRoleKeywords)) {
        if (keywords.some(keyword => textLower.includes(keyword))) {
          detectedRole = role;
          break;
        }
      }

      const salaryMatch = text.match(/(\d[\d,]*)\s*(LPA|lakh|lac|₹|Rs?\.?)/i);
      if (salaryMatch) {
        const offeredSalary = parseInt(salaryMatch[1].replace(/,/g, ''));
        const typicalRange = salaryData[detectedRole]?.[experience];
        
        if (typicalRange) {
          analysis.salaryAnalysis = {
            detectedRole: detectedRole,
            offered: offeredSalary,
            typicalMin: typicalRange.min,
            typicalMax: typicalRange.max,
            typical: typicalRange.typical,
            isReasonable: offeredSalary >= typicalRange.min && offeredSalary <= typicalRange.max,
            isTooHigh: offeredSalary > typicalRange.max * 1.5,
            isTooLow: offeredSalary < typicalRange.min * 0.7,
            currency: "INR"
          };
          
          if (analysis.salaryAnalysis.isTooHigh) {
            analysis.redFlags.push(`Salary unusually high for ${experience} ${detectedRole}`);
            analysis.riskScore += 2;
            analysis.recommendations.push(`Typical ${experience} ${detectedRole} salary: ₹${(typicalRange.min/100000).toFixed(1)}-${(typicalRange.max/100000).toFixed(1)} LPA`);
          } else if (analysis.salaryAnalysis.isTooLow) {
            analysis.redFlags.push(`Salary unusually low for ${experience} ${detectedRole}`);
            analysis.riskScore += 1;
          }
        }
      }

      analysis.detectedJobRole = detectedRole;

      // 3. Enhanced Company Detection & Analysis
      const emailMatch = text.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);
      let detectedCompany = null;

      for (const [company, keywords] of Object.entries(companyKeywords)) {
        if (keywords.some(keyword => textLower.includes(keyword))) {
          detectedCompany = company;
          break;
        }
      }

      if (emailMatch) {
        emailMatch.forEach(email => {
          const domain = email.substring(email.indexOf('@'));
          const isSuspicious = ['gmail.', 'yahoo.', 'hotmail.', 'rediffmail.', 'outlook.', 'aol.'].some(d => domain.includes(d));
          
          let actualCompany = null;
          for (const [company, domains] of Object.entries(companyDomains)) {
            if (domains.some(companyDomain => domain === companyDomain)) {
              actualCompany = company;
              break;
            }
          }
          
          if (detectedCompany && actualCompany && detectedCompany !== actualCompany) {
            analysis.redFlags.push(`Claims to be ${detectedCompany} but uses ${actualCompany} email (${email})`);
            analysis.riskScore += 4;
          } else if (detectedCompany && isSuspicious) {
            analysis.redFlags.push(`Claims to be ${detectedCompany} but uses personal email (${email})`);
            analysis.riskScore += 3;
          } else if (isSuspicious) {
            analysis.redFlags.push(`Uses personal email (${email}) for business communication`);
            analysis.riskScore += 2;
          } else if (actualCompany) {
            analysis.recommendations.push(`✅ Professional email detected - appears to be genuine ${actualCompany} communication`);
          }
          
          analysis.companyAnalysis = {
            emailFound: email,
            domain: domain,
            isProfessional: !isSuspicious,
            detectedCompany: detectedCompany,
            actualCompany: actualCompany,
            isVerified: !!actualCompany,
            hasMismatch: detectedCompany && actualCompany && detectedCompany !== actualCompany
          };
        });
      }

      // If company mentioned but no email found
      if (detectedCompany && !emailMatch) {
        analysis.recommendations.push(`Company ${detectedCompany} mentioned - verify through official website`);
      }

      // 4. Generate general recommendations
      if (analysis.riskScore > 0) {
        analysis.recommendations.push("Verify company through official website");
        analysis.recommendations.push("Contact through official channels only");
        analysis.recommendations.push("Never share personal/financial information");
      }
      if (analysis.redFlags.some(flag => flag.includes('money'))) {
        analysis.recommendations.push("⚠️ Never send money for job applications - this is always a scam");
      }

      // 5. Calculate final risk level
      analysis.riskLevel = 
        analysis.riskScore >= 8 ? 'CRITICAL' :
        analysis.riskScore >= 5 ? 'HIGH' :
        analysis.riskScore >= 3 ? 'MEDIUM' : 'LOW';

      analysis.success = true;

      res.json(analysis);
      
    } catch (error) {
      res.status(500).json({ 
        error: 'Analysis failed', 
        message: error.message 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

// Export with CORS
module.exports = allowCors(handler);
