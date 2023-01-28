$(function () {
    const storeAmenity = {};
    const getCheckbox = $('input:checkbox');
    getCheckbox.change(function () {
        if ($(this).is(':checked')) {
            storeAmenity[$(this).data('id')] = $(this).data('name');
        } else {
            delete storeAmenity[$(this).data('id')];
        }
        const getDiv = $('DIV.amenities > h4');
        const myObjs = Object.values(storeAmenity);
        if (myObjs.length > 0) {
            getDiv.text(myObjs.join(', '));
        } else {
            getDiv.html('&nbsp;');
        }
    });
});
