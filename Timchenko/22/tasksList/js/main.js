$(document).ready(function () {


var Module = (function () {

	/*var _elements = function (param) {
		var 
	};*/

	var publicMethodOne = function (param) {
		var holder = $('.' + param.holderClass);
		var form = $('#' + param.formId);
		var textarea = form.find('#' + param.textareaId);
		var btnForm = form.find(param.btnForm);
		var listItems = $('#' + param.listItemsId);
		var newItem = $(param.newItemd);
		var btnEdit = $('<button>', {
			class: param.btnEditClass,
			text: param.btnEditText
		});
		var btnDisable = $('<button>', {
			class: param.btnDisableClass,
			text:param.btnDisableText
		});
		var editableElement = $('<span>', {
			class: param.editableElement
		});

		btnForm.on('click', function (e) {
			e.preventDefault();
			listItems.append(newItem);
			newItem.append(editableElement, btnEdit, btnDisable);

			if (textarea.val().length > 0 ) {
				editableElement.text(textarea.val());
			} else {
				return false;
			}
		});

		btnEdit.on('click', function (e) {
			e.preventDefault();
			$(this).parent().addClass('active-edit');
			$(this).siblings('span.edit-text').attr('contenteditable', 'true');
		});

		btnDisable.on('click', function (e) {
			e.preventDefault();
			$(this).siblings('span.edit-text')
			.attr('contenteditable', 'false')
			.parents('li')
			.append('<em>')

		})








	};


	return {
		publicMethodOne: publicMethodOne
	};

})();

Module.publicMethodOne({
	holderClass: 'wrapper',
	formId: 'task-form',
	textareaId: 'task-name',
	btnForm: 'input[type="submit"]',
	listItemsId: 'tasks-list',
	newItemd: '<li>',
	editableElement: 'edit-text',
	btnEditClass: 'edit',
	btnDisableClass: 'Disable',
	btnEditText:'Edit',
	btnDisableText: 'Disable'
});

});