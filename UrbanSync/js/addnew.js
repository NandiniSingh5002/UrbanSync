$(document).ready(function () {
    $('#projectForm').on('submit', function (e) {
        e.preventDefault();

        const projectData = {
            projectName: $('#projectName').val(),
            department: $('#department').val(),
            location: $('#location').val(),
            startDate: $('#startDate').val(),
            endDate: $('#endDate').val(),
            budget: $('#budget').val(),
            stakeholders: $('#stakeholders').val(),
            objectives: $('#objectives').val(),
            outcomes: $('#outcomes').val(),
            documentation: $('#documentation').val()
        };

        console.log('Project Submitted:', projectData);
        alert('Project Submitted Successfully');
    });

    $('#saveDraft').on('click', function () {
        const draftData = {
            projectName: $('#projectName').val(),
            department: $('#department').val(),
            location: $('#location').val(),
            startDate: $('#startDate').val(),
            endDate: $('#endDate').val(),
            budget: $('#budget').val(),
            stakeholders: $('#stakeholders').val(),
            objectives: $('#objectives').val(),
            outcomes: $('#outcomes').val(),
            documentation: $('#documentation').val()
        };

        console.log('Draft Saved:', draftData);
        alert('Draft Saved Successfully');
    });
});
