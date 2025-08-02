document.addEventListener("DOMContentLoaded",()=>{

    const checkbox = document.getElementById('check');
    //getting the saved toggle stats
    chrome.storage.sync.get('hideDifficulty',(data)=>{
       checkbox.checked = data.hideDifficulty || false;
    });
    //when user toggles checkbox , we'll write store the new value
    checkbox.addEventListener('change',()=>{
        chrome.storage.sync.set({hideDifficulty:checkbox.checked});
    })
    
})