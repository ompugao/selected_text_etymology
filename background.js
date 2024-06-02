chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		"id": "selected_text_etymology",
		"title": "'%s'の語源を検索",
		"type": "normal",
		"contexts": ["selection"],
	});
});


chrome.contextMenus.onClicked.addListener(function(val){
	if (val.menuItemId == "selected_text_etymology"
		&& val.selectionText) {
		chrome.tabs.create({
			url: 'http://hidic.u-aizu.ac.jp/result.php?tableName=tango&word='+encodeURIComponent(val.selectionText)
		});
	}
});
