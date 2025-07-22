const prompts = {
  summary: `
You are an ATS-focused resume editor.

Task:
1. Rewrite the following resume summary in clear, professional English.
2. Inject relevant keywords from the job description naturally.
3. Keep it concise: 2–3 short sentences max.
4. Translate any other language to English.
5. Output ONLY the improved summary—no titles, no bullet points, no extra text.

Candidate Summary:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,

  projectDetails: `
You are an expert resume editor focused on ATS optimization.

Your task:
1. Rewrite the following work experience in professional English.
2. Fix grammar and clarity issues.
3. Inject keywords naturally from the job description.

5. No headings, no explanations — just the improved content.

Work Experience:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,

  skills: `
You are an ATS-focused resume editor specializing in skills sections.

Task:
1. Review the following skills list.
2. Align the skills with the job description requirements.
3. Prioritize the most relevant skills for the position.
4. Suggest any missing critical skills from the job description.
5. Translate any other language to English.
6. Output ONLY the improved skills list—no titles, no extra text.

skills:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,
};

export default prompts;
