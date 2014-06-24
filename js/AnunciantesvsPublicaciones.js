// JavaScript Document

	$(document).ready(function(){
		var itemID = $('#item-id').data('item-id');
		$('.related li').hide();
		
		$('.related li').each(function(){
			var relatedID = $(this).data('related-id');
			if (relatedID != itemID){
				$(this).remove();
			} else {
				$(this).show();
			}
		});
	});
