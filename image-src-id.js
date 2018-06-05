var $ = jQuery;
$(function() {

	$('.image_src_by_id_submit').on('click', function (e) {
        e.preventDefault();
        
        image_id 		= $('#image_id').val();
        image_src_size  = $('#image_src_size').val();

        $.ajax({
            type : 'POST',
            url  : image_src_id.ajax_url,
            data : {
                action     : 'image_src_by_id',
                image_id  : image_id,
                image_src_size : image_src_size

            },
            success: function (response) {
               	$('#img_src_id_result').html( response );
            }
        });
 	});
});