
function toggleswitch() {
    chrome.storage.sync.get('hideDifficulty',(data)=>{
        const hide= data.hideDifficulty;
        const difficultytag = document.querySelectorAll("div.text-difficulty-medium,div.text-difficulty-easy,div.text-difficulty-hard,p.text-sd-hard,p.text-sd-easy,p.text-sd-medium");
        difficultytag.forEach((tag) => {
            tag.style.display = hide? "none":"";
        });
    });    
}
toggleswitch();

const observer = new MutationObserver(toggleswitch);
observer.observe(document.body, { childList: true, subtree: true });


chrome.storage.onChanged.addListener((changes)=>{
    if(changes.hideDifficulty){
        toggleswitch();
    }
})