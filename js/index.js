
$(function() {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 1000
    });
    $('#contacto').on('show.bs.modal', function (e) {
        console.log('el modal contacto se está mostrando');
    });
    $('#contacto').on('shown.bs.modal', function (e) {
        console.log('el modal contacto se está mostró');
    });
    $('#contacto').on('hide.bs.modal', function (e) {
        console.log('el modal contacto se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log('el modal contacto se ocultó');
    });
});
