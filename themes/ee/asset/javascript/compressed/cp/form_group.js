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
!function(e){"use strict";function t(t,a,o){i(t,o,a),t.toggle(a),t.each(function(t,a){var i=e(a).closest("fieldset");i.hasClass("invalid")&&0==i.find("input:visible").not("input.btn").size()&&(i.removeClass("invalid"),i.find("em.ee-form-error-message").remove())})}function a(a,i,s){a.each(function(){e(this).toggle(i),e(this).nextUntil("h2, .form-ctrls").each(function(){var a=e(this),n=a.data("group");n&&(o[n]=!i),i&&n?t(a,c[n],s):t(a,i,s)})})}function i(t,a,i){t.find(":radio").each(function(){var t=e(this);t.attr("disabled",!i);var a=t.data("el_checked");a||(a="checked"==e(this).attr("checked"),t.data("el_checked",a),t.change(function(){t.data("el_checked",t.prop("checked"))})),i&&t.prop("checked",a)})}var o={"always-hidden":!1},c={"always-hidden":!1};e(document).ready(function(){var t=e("*[data-group-toggle]:radio");i(t,"",!1),e("*[data-group-toggle]").each(function(t,a){if(!e(this).is(":radio")||e(this).is(":checked")){var i=e(this).data("groupToggle"),o=e(this).val();e.each(i,function(e,t){(void 0==c[t]||0==c[t])&&(c[t]=!(e!=o))})}}),e("*[data-group-toggle]").each(function(t,a){if(!e(this).is(":radio")||e(this).is(":checked")){EE.cp.form_group_toggle(this);e(this).data("groupToggle")}})}),EE.cp.form_group_toggle=function(i){var s=e(i).data("groupToggle"),n=e(i).val();c={"always-hidden":!1},e.each(s,function(i,s){var d=e('*[data-group="'+s+'"]'),r=e('*[data-section-group="'+s+'"]');(void 0==c[s]||0==c[s])&&(c[s]=i==n),t(d,o[s]?!1:i==n),a(r,c[s])});var d=e(i).closest("form");d.find("fieldset.last").not(".grid-wrap fieldset").removeClass("last"),d.find("h2, .form-ctrls").each(function(){e(this).prevAll("fieldset:visible").first().addClass("last")})}}(jQuery);