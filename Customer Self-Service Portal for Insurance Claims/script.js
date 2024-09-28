// const claims = [];
// let claimCount = 0;

// document.getElementById('fileClaimBtn').addEventListener('click', showClaimForm);
// document.getElementById('trackClaimsBtn').addEventListener('click', trackClaims);
// document.getElementById('chatbotBtn').addEventListener('click', showChatbot);

// document.getElementById('claimSubmissionForm').addEventListener('submit', submitClaim);
// document.getElementById('searchQuery').addEventListener('input', searchKnowledgeBase);

// // Show Claim Submission Form
// function showClaimForm() {
//     hideAllSections();
//     document.getElementById('claimForm').classList.remove('hidden');
// }

// // Track Claims Section
// function trackClaims() {
//     hideAllSections();
//     const claimsBody = document.getElementById('claimsBody');
//     claimsBody.innerHTML = '';

//     claims.forEach(claim => {
//         const row = `<tr>
//             <td>${claim.id}</td>
//             <td>${claim.status}</td>
//             <td>${claim.date}</td>
//         </tr>`;
//         claimsBody.innerHTML += row;
//     });

//     document.getElementById('trackClaims').classList.remove('hidden');
// }

// // Submit Claim Form
// function submitClaim(e) {
//     e.preventDefault();

//     const policyNumber = document.getElementById('policyNumber').value;
//     const incidentDate = document.getElementById('incidentDate').value;
//     const incidentDescription = document.getElementById('incidentDescription').value;
    
//     claimCount++;
//     claims.push({
//         id: `CLM00${claimCount}`,
//         status: 'In Review',
//         date: new Date().toLocaleDateString(),
//         policyNumber,
//         incidentDate,
//         incidentDescription
//     });

//     document.getElementById('submissionMessage').innerHTML = 'Claim submitted successfully!';
//     document.getElementById('submissionMessage').classList.remove('hidden');
//     document.getElementById('claimSubmissionForm').reset();
//     trackClaims();
// }

// // Show Chatbot Section
// function showChatbot() {
//     hideAllSections();
//     document.getElementById('chatbotSection').classList.remove('hidden');
//     // Here you would typically initialize your Dialogflow chatbot.
// }

// // Search Knowledge Base
// function searchKnowledgeBase() {
//     const query = document.getElementById('searchQuery').value.toLowerCase();
//     const results = []; // Populate with your preloaded FAQs and articles
//     // Dummy data for knowledge base
//     const knowledgeBase = [
//         "How to file a claim?",
//         "What documents are required?",
//         "How to track my claim?"
//     ];
    
//     knowledgeBase.forEach(item => {
//         if (item.toLowerCase().includes(query)) {
//             results.push(item);
//         }
//     });

//     document.getElementById('searchResults').innerHTML = results.map(result => `<p>${result}</p>`).join('');
// }

// // Hide all sections
// function hideAllSections() {
//     document.getElementById('claimForm').classList.add('hidden');
//     document.getElementById('trackClaims').classList.add('hidden');
//     document.getElementById('chatbotSection').classList.add('hidden');
// }
// const claims = [];
// let claimCount = 0;

// document.getElementById('fileClaimBtn').addEventListener('click', showClaimForm);
// document.getElementById('trackClaimsBtn').addEventListener('click', trackClaims);
// document.getElementById('chatbotBtn').addEventListener('click', showChatbot);

// document.getElementById('claimSubmissionForm').addEventListener('submit', submitClaim);
// document.getElementById('searchQuery').addEventListener('input', searchKnowledgeBase);
// // Set the default date to today
// document.getElementById('incidentDate').value = new Date().toISOString().split('T')[0];
// // Set the default date to today when the page loads
// window.onload = function() {
//     document.getElementById('incidentDate').value = new Date().toISOString().split('T')[0];
// };



// let claimDate = null;

// function saveClaim(date) {
//     if (date) {
//         // Parse the date
//         claimDate = new Date(date);
//         console.log("Saving Claim Date:", claimDate);
//     } else {
//         console.error("Date is null or undefined");
//     }
// }

// function onDateSelect(date) {
//     console.log("Selected Date before saving:", date); // Log the selected date
//     saveClaim(date);
// }

// function displayClaim() {
//     if (claimDate) {
//         // Format the date for display
//         const formattedDate = claimDate.toLocaleDateString("en-IN");
//         console.log("Claim Date Displayed:", formattedDate);
//     } else {
//         console.log("No claim date to display.");
//     }
// }

// // Example usage, replace this with actual date from your date picker


// // Show Claim Submission Form
// function showClaimForm() {
//     hideAllSections();
//     document.getElementById('claimForm').classList.remove('hidden');
// }
// console.log("Saving claim date:", claimDate); // Check the date being saved

// // Track Claims Section
// function trackClaims() {
//     hideAllSections();
//     const claimsBody = document.getElementById('claimsBody');
//     claimsBody.innerHTML = '';

//     claims.forEach(claim => {
//         const row = `<tr>
//             <td>${claim.id}</td>
//             <td>${claim.status}</td>
//             <td>${claim.date}</td>
//         </tr>`;
//         claimsBody.innerHTML += row;
//     });

//     document.getElementById('trackClaims').classList.remove('hidden');
// }

// // Submit Claim Form
// function submitClaim(e) {
//     e.preventDefault();

//     const policyNumber = document.getElementById('policyNumber').value;
//     const incidentDate = document.getElementById('incidentDate').value;
//     const incidentDescription = document.getElementById('incidentDescription').value;
    
//     claimCount++;
//     claims.push({
//         id: `CLM00${claimCount}`,
//         status: 'In Review',
//         date: new Date().toLocaleDateString(),
//         policyNumber,
//         incidentDate,
//         incidentDescription
//     });

//     document.getElementById('submissionMessage').innerHTML = 'Claim submitted successfully!';
//     document.getElementById('submissionMessage').classList.remove('hidden');
//     document.getElementById('claimSubmissionForm').reset();
//     trackClaims();
// }
// // Show Chatbot Section
// function showChatbot() {
//     hideAllSections();
//     document.getElementById('chatbotSection').classList.remove('hidden');
//     document.getElementById('chatbotContainer').innerHTML = 'Chatbot is loading...';

//     // Simulating chatbot initialization
//     setTimeout(() => {
//         document.getElementById('chatbotContainer').innerHTML = '<p>Chatbot is ready! Ask your questions below.</p>';
//     }, 2000); // Simulate loading time
// }

// // Dummy function to simulate Dialogflow response
// function sendMessageToChatbot(message) {
//     const responses = {
//         "How do I file a claim?": "You can file a claim by filling out the claim submission form.",
//         "What documents are required?": "You need to provide your policy number and any supporting documents.",
//         "How to track my claim?": "You can track your claim by going to the 'Track Claims' section."
//     };

//     return responses[message] || "I'm sorry, I didn't understand that.";
// }

// // Send Message Button Event Listener
// document.getElementById('sendMessageBtn').addEventListener('click', function () {
//     const messageInput = document.getElementById('userMessageInput');
//     const message = messageInput.value.trim();

//     if (message) {
//         const response = sendMessageToChatbot(message);
//         document.getElementById('chatbotContainer').innerHTML += `<p>You: ${message}</p><p>Chatbot: ${response}</p>`;
//         messageInput.value = ''; // Clear input
//     }
// });

// // Example event listener for user input (optional: for pressing enter)
// document.getElementById('userMessageInput').addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         document.getElementById('sendMessageBtn').click(); // Trigger button click
//     }
// });


// // Search Knowledge Base
// function searchKnowledgeBase() {
//     const query = document.getElementById('searchQuery').value.toLowerCase();
//     const results = [];
    
//     // Dummy data for knowledge base
//     const knowledgeBase = [
//         "How do I file a claim?",
//         "What documents are required?",
//         "How to track my claim?",
//         "What is my policy coverage?",
//         "How to change my policy details?"
//     ];
    
//     knowledgeBase.forEach(item => {
//         if (item.toLowerCase().includes(query)) {
//             results.push(item);
//         }
//     });

//     document.getElementById('searchResults').innerHTML = results.length > 0 
//         ? results.map(result => `<p>${result}</p>`).join('') 
//         : '<p>No results found.</p>';
// }

// // Initialize Dialogflow Chatbot
// function initializeChatbot() {
//     // Example Dialogflow chatbot initialization
//     const chatbotContainer = document.getElementById('chatbotContainer');
    
//     // Your Dialogflow chatbot setup here
//     const chatBot = new DialogflowChatbot(chatbotContainer); // Replace with your specific implementation
//     chatBot.start(); // Start the chatbot session
// }

// // // Search Knowledge Base
// // function searchKnowledgeBase() {
// //     const query = document.getElementById('searchQuery').value.toLowerCase();
// //     const results = []; 
// //     const knowledgeBase = [
// //         "How to file a claim?",
// //         "What documents are required?",
// //         "How to track my claim?",
// //         "What is the claims process?",
// //         "How can I appeal a claim decision?"
// //     ];
    
// //     knowledgeBase.forEach(item => {
// //         if (item.toLowerCase().includes(query)) {
// //             results.push(item);
// //         }
// //     });

// //     document.getElementById('searchResults').innerHTML = results.map(result => `<p>${result}</p>`).join('');
// // }

// // Hide all sections
// function hideAllSections() {
//     document.getElementById('claimForm').classList.add('hidden');
//     document.getElementById('trackClaims').classList.add('hidden');
//     document.getElementById('chatbotSection').classList.add('hidden');
// }

// // Example Dialogflow Chatbot Class (Placeholder)
// class DialogflowChatbot {
//     constructor(container) {
//         this.container = container;
//         // Additional setup code
//     }

//     start() {
//         // Logic to embed Dialogflow chatbot
//         this.container.innerHTML = "<p>Chatbot is loading...</p>";
//         // Logic for handling user input and displaying responses
//     }
// }
const claims = [];
let claimCount = 0;
let claimDate = null;

document.getElementById('fileClaimBtn').addEventListener('click', showClaimForm);
document.getElementById('trackClaimsBtn').addEventListener('click', trackClaims);
document.getElementById('chatbotBtn').addEventListener('click', showChatbot);
document.getElementById('claimSubmissionForm').addEventListener('submit', submitClaim);

// Set the default date to today
window.onload = function() {
    document.getElementById('incidentDate').value = new Date().toISOString().split('T')[0];
};

function saveClaim(date) {
    if (date) {
        claimDate = new Date(date);
        console.log("Saving Claim Date:", claimDate);
    } else {
        console.error("Date is null or undefined");
    }
}

function submitClaim(e) {
    e.preventDefault();

    const policyNumber = document.getElementById('policyNumber').value;
    const incidentDate = document.getElementById('incidentDate').value; // Get selected date
    const incidentDescription = document.getElementById('incidentDescription').value;

    // Save the claim date before pushing to claims array
    saveClaim(incidentDate);

    claimCount++;
    claims.push({
        id: `CLM00${claimCount}`,
        status: 'In Review',
        date: incidentDate, // Use selected incident date
        policyNumber,
        incidentDescription
    });
    const submissionMessage = document.getElementById('submissionMessage');
    submissionMessage.innerHTML = 'Claim submitted successfully!';
    submissionMessage.classList.remove('hidden');

    document.getElementById('claimSubmissionForm').reset();
    trackClaims();
    // document.getElementById('submissionMessage').innerHTML = 'Claim submitted successfully!';
    // document.getElementById('submissionMessage').classList.remove('hidden');
    // document.getElementById('claimSubmissionForm').reset();
    // trackClaims();
}

function trackClaims() {
    hideAllSections();
    const claimsBody = document.getElementById('claimsBody');
    claimsBody.innerHTML = '';

    claims.forEach(claim => {
        const row = `<tr>
            <td>${claim.id}</td>
            <td>${claim.status}</td>
            <td>${new Date(claim.date).toLocaleDateString('en-IN')}</td> <!-- Display date properly -->
        </tr>`;
        claimsBody.innerHTML += row;
    });

    document.getElementById('trackClaims').classList.remove('hidden');
}

function showClaimForm() {
    hideAllSections();
    document.getElementById('claimForm').classList.remove('hidden');
    document.getElementById('submissionMessage').classList.add('hidden'); // <-- Added this line
}

function showChatbot() {
    hideAllSections();
    document.getElementById('chatbotSection').classList.remove('hidden');
    document.getElementById('chatbotContainer').innerHTML = 'Chatbot is loading...';

    // Simulating chatbot initialization
    setTimeout(() => {
        document.getElementById('chatbotContainer').innerHTML = '<p>Chatbot is ready! Ask your questions below.</p>';
    }, 2000);
}

// Hide all sections
function hideAllSections() {
    document.getElementById('claimForm').classList.add('hidden');
    document.getElementById('trackClaims').classList.add('hidden');
    document.getElementById('chatbotSection').classList.add('hidden');
}

// Send Message Button Event Listener
document.getElementById('sendMessageBtn').addEventListener('click', function () {
    const messageInput = document.getElementById('userMessageInput');
    const message = messageInput.value.trim();

    if (message) {
        const response = sendMessageToChatbot(message);
        document.getElementById('chatbotContainer').innerHTML += `<p>You: ${message}</p><p>Chatbot: ${response}</p>`;
        messageInput.value = ''; // Clear input
    }
});

// Dummy function to simulate Dialogflow response
function sendMessageToChatbot(message) {
    const responses = {
        "How do I file a claim?": "To file a claim, go to the 'File a Claim' section of our portal. You will need your policy number and details of the incident. Complete the claim submission form with all the necessary information, including the date of the incident and a description. Once submitted, your claim will be reviewed by our team.",
        "What documents are required to submit a claim?": "You will need to provide your policy number, a description of the incident, the date of the incident, and any supporting documents such as photos, receipts, or police reports (if applicable).",
        "How can I track my claim status?": "You can track the status of your claim by navigating to the 'Track Claims' section of our portal. Enter your claim number to see its current status.",
        "What is covered under my policy?": "Coverage details vary depending on your policy. Commonly covered items include accidental damage, theft, natural disasters, and liability coverage. Review your policy document for specific details.",
        "How do I change my policy details?": "To update your policy details, such as your address or contact information, visit the 'Policy Management' section of the portal, or contact our customer service team.",
        "What happens if my claim is denied?": "If your claim is denied, you will receive a detailed explanation. You can appeal the decision by submitting additional documents or clarification through the 'Appeal a Claim' section.",
        "How long does the claim process take?": "The claim process typically takes 7-14 business days, depending on the complexity of the claim. You can track the progress in real-time in the 'Track Claims' section."
    };

    return responses[message] || "I'm sorry, I didn't understand that.";
}

// Preload a few articles related to common insurance questions
const knowledgeBase = [
    "How do I file a claim?",
    "What documents are required to submit a claim?",
    "How can I track my claim status?",
    "What is covered under my policy?",
    "How do I change my policy details?",
    "Can I appeal a claim decision?",
    "What happens if my claim is denied?",
    "How long does the claim process take?"
];

// Add event listener to search input to capture user input
document.getElementById('searchQuery').addEventListener('input', searchKnowledgeBase);

// Function to search the knowledge base and display the results
function searchKnowledgeBase() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const results = [];

    // Filter articles that match the query
    knowledgeBase.forEach(item => {
        if (item.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    // Display the results in the 'searchResults' div
    const resultsDiv = document.getElementById('searchResults');
    if (results.length > 0) {
        resultsDiv.innerHTML = results.map(result => `<p>${result}</p>`).join('');
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

