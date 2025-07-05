
# 📘 Admissions Counselor Agent – README

## 🔧 Prompt Stack / Flow

The voice assistant follows a structured **system prompt** designed to simulate a human-like admissions counselor. It includes:

- **Greeting & intent detection**  
- Collects: `full name`, `course of interest`, and `preferred start date`
- Answers queries using **predefined course data**:
  - Full course name
  - Duration
  - Annual fee
  - Scholarship fee (after 20% deduction)
- Supports follow-up queries like:
  - “Do you have master’s programs?”
  - “What’s the duration of BHM?”
  - “Fee after scholarship for BBA?”

For unsupported queries (e.g., MBA, hostel), it responds:  
**“I'm afraid I don’t have that information yet, but I can pass your query to our human counselor.”**

## 🧰 Tools Used

| Tool           | Purpose                                  |
|----------------|-------------------------------------------|
| **Vapi AI**    | Hosted voice agent and real-time voice interface |
| **React (Vite)** | Web UI and integration with iframe |
| **JSON (manual)** | Course data source used by the agent |
| **HTML/CSS**   | UI design for agent embedding and info display |

## 📦 Course Data Storage & Retrieval

- Course data is stored as a hard-coded **JSON array** inside the system prompt.
- The agent does **exact or partial string matching** (e.g., "BBA" matches "BBA (with industry certificates)").
- Fees and scholarship amounts are spoken in **natural language (e.g., eighty-nine thousand six hundred rupees)** using a helper function or formatting logic.

### ✅ Sample Data Entry

```json
{
  "course": "BCA (with industry certificates)",
  "duration": "3 yrs",
  "fee": "1,12,000",
  "scholarship_fee": "89,600"
}
```

## ⚠️ Edge Cases Handled

1. **Partial Course Match**  
   > User: “I’m interested in BBA”  
   → Matched to: `"BBA (with industry certificates)"`

2. **Unknown Course or Out-of-Scope**  
   > User: “Tell me about MBA”  
   → Response: “I'm afraid I don’t have that information yet...”

3. **Fee / Duration Questions Without Full Context**  
   > User: “How much is the fee after scholarship for BSc IT?”  
   → Agent replies with exact amount and full spoken fee value.

## 📎 Deployment

- The agent is deployed using **Vapi AI** and embedded on a custom-built **React web page** via iframe.
- Compatible with both desktop and mobile.

> ✉️ Submission Contact: **Yash Patil**  
> Agent Link: https://clg-voice-assist.vercel.app/  
> Subject Line: `Prompt Engineering Task – Yash Patil`
