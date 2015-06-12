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
			var btnEdit;
			var btnDisable;
			var editableElement;
			
			btnForm.on('click', function (e) {
				e.preventDefault();

				newItem = $(param.newItemd);

				btnEdit = $('<button>', {
					class: param.btnEditClass,
					text: param.btnEditText
				});

				btnDisable = $('<button>', {
					class: param.btnDisableClass,
					text:param.btnDisableText
				});

				editableElement = $('<span>', {
					class: param.editableElement
				});

				if (textarea.val().length > 0 ) {
					editableElement.text(textarea.val());
					textarea.val('')
				} else {
					return false;
				}

				if (!listItems.children('li').length) {
					newItem.append(editableElement, btnEdit, btnDisable);
					listItems.append(newItem);
				} else {
					newItem.append(editableElement, btnEdit, btnDisable);
					listItems.prepend(newItem);
				};

				btnEdit.on('click', function (e) {
					e.preventDefault();
					var currentList = $(this).parent('li');
					console.log(this)

					if(currentList.hasClass('active-edit')) {
						currentList.removeClass('active-edit');
						$(this).html('Start edit');
						$(this).siblings('span.edit-text').attr('contenteditable', 'false');
					} else {
						currentList.addClass('active-edit');
						$(this).html('Finish edit');
						$(this).siblings('span.edit-text').attr('contenteditable', 'true');
					}
				});

				btnDisable.on('click', function (e) {
					e.preventDefault();
					$(this).siblings('span.edit-text')
					.attr('contenteditable', 'false')
					.parents('li')
					.append('<em>');
					$(this).siblings('button.edit').hide();
					$(this).html('completed')
					
				});
			});
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
		btnEditText:'Start edit',
		btnDisableText: 'Disable'
	});

});