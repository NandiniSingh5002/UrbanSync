$(document).ready(function () {
    // Toggle Schedule Meeting Form
    $('#scheduleMeetingBtn').on('click', function () {
        $('#meetingForm').toggle();
    });

    // Handle New Meeting Form Submission
    $('#newMeetingForm').on('submit', function (e) {
        e.preventDefault();

        const title = $('#meetingTitle').val();
        const date = $('#meetingDate').val();
        const time = $('#meetingTime').val();
        const participants = $('#participants').val();
        const meetingLink = $('#meetingLink').val();

        const newMeeting = `
            <li class="list-group-item meeting-list-item">
                <div>
                    <strong>${title}</strong><br>
                    <small>Date: ${date} | Time: ${time}</small><br>
                    <small>Participants: ${participants}</small>
                </div>
                <button class="btn btn-success join-button" data-link="${meetingLink}">Join</button>
            </li>
        `;

        $('#meetingList').append(newMeeting);
        $('#newMeetingForm')[0].reset();
        $('#meetingForm').hide();
    });

    // Handle Join Button Click
    $(document).on('click', '.join-button', function () {
        const link = $(this).data('link');
        window.open(link, '_blank');
    });
});