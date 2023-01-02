chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'password-generated') {
        const { password } = request;

        sendResponse({ status: 'success' })
    }
});
