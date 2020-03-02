chrome.contextMenus.create({
    "title": "'%s'の語源を検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(val) {
        chrome.tabs.create({
            url: 'http://hidic.u-aizu.ac.jp/result.php?tableName=tango&word='+encodeURIComponent(val.selectionText)
        });
    }
});
