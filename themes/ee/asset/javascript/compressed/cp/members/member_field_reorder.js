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
!function(e){"use strict";e(document).ready(function(){e("table").eeTableReorder({afterSort:function(r){e.ajax({url:EE.member_fields.reorder_url,data:{order:e('input[name="order[]"]').serialize()},type:"POST",dataType:"json",error:function(r,a,n){0==e("body > .banner").size()&&e("body").prepend(EE.alert.reorder_ajax_fail)}})}})})}(jQuery);