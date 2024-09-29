$(document).ready(function () {
    $('#searchForm').on('submit', function (e) {
        e.preventDefault();

        // Dummy data for results
        const results = [
            {
                name: "Project A", startDate: "2024-01-01", endDate: "2024-03-01", status: "In Progress",
                department: "Engineering", location: "New York", budget: "$10,000", stakeholders: "John Doe, Jane Smith",
                objectives: "Complete the project by Q1 2024", outcomes: "Successful deployment",
                documentation: "projectA_docs.pdf"
            },
            {
                name: "Project B", startDate: "2023-05-01", endDate: "2023-10-01", status: "Completed",
                department: "Marketing", location: "San Francisco", budget: "$15,000", stakeholders: "Alice Brown, Bob Johnson",
                objectives: "Increase brand awareness", outcomes: "10% market share growth",
                documentation: "projectB_docs.pdf"
            },
            {
                name: "Project C", startDate: "2024-06-01", endDate: "2024-12-01", status: "On Hold",
                department: "Operations", location: "Chicago", budget: "$8,000", stakeholders: "Michael Green, Sarah White",
                objectives: "Optimize supply chain", outcomes: "20% cost reduction",
                documentation: "projectC_docs.pdf"
            }
        ];

        $('#resultsList').empty(); // Clear previous results

        results.forEach((result, index) => {
            $('#resultsList').append(`
                <li class="list-group-item">
                    <div>
                        <strong>${result.name}</strong><br>
                        <small>Start Date: ${result.startDate} | End Date: ${result.endDate}</small><br>
                        <small>Status: ${result.status}</small>
                    </div>
                    <button class="btn btn-primary btn-sm float-right view-details-btn" data-index="${index}">View Details</button>
                </li>
            `);
        });

        // Click event for "View Details" button
        $('.view-details-btn').on('click', function () {
            const index = $(this).data('index');
            const project = results[index];

            $('#projectName').text(project.name);
            $('#projectDepartment').text(project.department);
            $('#projectLocation').text(project.location);
            $('#projectStartDate').text(project.startDate);
            $('#projectEndDate').text(project.endDate);
            $('#projectBudget').text(project.budget);
            $('#projectStakeholders').text(project.stakeholders);
            $('#projectObjectives').text(project.objectives);
            $('#projectOutcomes').text(project.outcomes);
            $('#projectDocumentation').text(project.documentation);

            $('#projectDetailsModal').modal('show');
        });
    });
});