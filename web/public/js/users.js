$(document).ready(() => {

    $.ajax(`${BASE_URL}/users/list`,
    {
        dataType: 'json',
        success: (data, status, xhr) => {
            let users = data.data.users;

            // Datatable
            $('.datatable').DataTable({
                responsive: true,
                data: users,
                columns: [
                    { data: 'name' },
                    { data: 'email' },
                    { data: 'mobile' },
                    { data: 'statusStr' }
                ]
            })

            // append action buttons
            $('.datatable tbody').find('tr').each(function(i) {
                const id = users[i].id;
                const td = `<td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="${BASE_URL}/users/${id}"> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
                                </div>
                            </td>`;
            $(this).find('td').eq(3).after(td);
           });
        },
        error: (jqXhr, textStatus, errorMessage) => {
            console.log(errorMessage);
        }
    });
});