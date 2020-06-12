$(document).ready(() => {
    const baseUrl = "http://localhost:1337";

    $.ajax(`${baseUrl}/admin/users-list`,
    {
        dataType: 'json',
        success: (data, status, xhr) => { 
            let users = data.data.users;

            const usersList = users.map((item) => {
                const  { name, email, mobile, isActive } = item;
                let user = { name, email, mobile };
                user['status'] = isActive ? 'Active': 'In Active';
                user['id'] = item._id;

                return user;
            });

            // Datatable
            $('.datatable').DataTable({
                responsive: true,
                data: usersList,
                columns: [
                    { data: 'name' },
                    { data: 'email' },
                    { data: 'mobile' },
                    { data: 'status' }
                ]
            })

            // append action buttons
            $('.datatable tbody').find('tr').each(function(i) {
                const id = usersList[i].id;
                const td = `<td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="${baseUrl}/admin/users/${id}"> <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit </a>
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