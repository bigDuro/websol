/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 3.0
 * @filesource
 */
"use strict";!function(i){i(document).ready(function(){function e(e){i(".file-field-filepicker",e).FilePicker({callback:function(i,e){var t=e.input_value,l=e.input_img.closest("figure");e.modal.find(".m-close").click(),t.val("{filedir_"+i.upload_location_id+"}"+i.file_name).trigger("change"),l.toggleClass("no-img",!i.isImage),l.find("img").toggleClass("hidden",!i.isImage),i.isImage&&e.input_img.attr("src",i.thumb_path);var n=i.title.substring(0,i.title.lastIndexOf(".")),a=i.title.substring(i.title.lastIndexOf("."),i.title.length);l.find("figcaption").html("<b>"+n+"</b>"+a),t.siblings(".fields-upload-chosen").removeClass("hidden"),t.siblings(".fields-upload-btn").addClass("hidden"),t.siblings("em").remove()}}),i("li.remove a").click(function(e){var t=i(this).closest(".fields-upload-chosen");t.addClass("hidden"),t.siblings("em").remove(),t.siblings('input[type="hidden"]').val("").trigger("change"),t.siblings(".fields-upload-btn").removeClass("hidden"),e.preventDefault()})}e(),Grid.bind("file","display",function(t){var l=i(".file-field-filepicker",t),n=i('input[type="hidden"]',t),a=n.attr("name").replace(/[\[\]']+/g,"_");l.attr("data-input-value",n.attr("name")),l.attr("data-input-image",a),i(".fields-upload-chosen img",t).attr("id",a),e(t)})})}(jQuery);