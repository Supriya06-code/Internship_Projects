const claims = [];
let claimCount = 0;

document.getElementById('fileClaimBtn').addEventListener('click', showClaimForm);
document.getElementById('trackClaimsBtn').addEventListener('click', trackClaims);
document.getElementById('chatbotBtn').addEventListener('click', showChatbot);

document.getElementById('claimSubmissionForm').addEventListener('submit', submitClaim);
document.getElementById('searchQuery').addEventListener('input', searchKnowledgeBase);

// Show Claim Submission Form
function showClaimForm() {
    hideAllSections();
    document.getElementById('claimForm').classList.remove('hidden');
}

// Track Claims Section
function trackClaims() {
    hideAllSections();
    const claimsBody = document.getElementById('claimsBody');
    claimsBody.innerHTML = '';

    claims.forEach(claim => {
        const row = `<tr>
            <td>${claim.id}</td>
            <td>${claim.status}</td>
            <td>${claim.date}</td>
        </tr>`;
        claimsBody.innerHTML += row;
    });

    document.getElementById('trackClaims').classList.remove('hidden');
}

// Submit Claim Form
function submitClaim(e) {
    e.preventDefault();

    const policyNumber = document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value;
    const incidentDescription = document.getElementById('incidentDescription').value;
    
    claimCount++;
    claims.push({
        id: `CLM00${claimCount}`,
        status: 'In Review',
        date: new Date().toLocaleDateString(),
        policyNumber,
        incidentDate,
        incidentDescription
    });

    document.getElementById('submissionMessage').innerHTML = 'Claim submitted successfully!';
    document.getElementById('submissionMessage').classList.remove('hidden');
    document.getElementById('claimSubmissionForm').reset();
    trackClaims();
}

// Show Chatbot Section
function showChatbot() {
    hideAllSections();
    document.getElementById('chatbotSection').classList.remove('hidden');
    // Here you would typically initialize your Dialogflow chatbot.
}

// Search Knowledge Base
function searchKnowledgeBase() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const results = []; // Populate with your preloaded FAQs and articles
    // Dummy data for knowledge base
    const knowledgeBase = [
        "How to file a claim?",
        "What documents are required?",
        "How to track my claim?"
    ];
    
    knowledgeBase.forEach(item => {
        if (item.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    document.getElementById('searchResults').innerHTML = results.map(result => `<p>${result}</p>`).join('');
}

// Hide all sections
function hideAllSections() {
    document.getElementById('claimForm').classList.add('hidden');
    document.getElementById('trackClaims').classList.add('hidden');
    document.getElementById('chatbotSection').classList.add('hidden');
}
