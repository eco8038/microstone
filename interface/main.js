document.addEventListener('DOMContentLoaded', () => {
    const cctvVideo = document.getElementById('cctvVideo');
    const issueOverlay = document.getElementById('issueOverlay');
    const alertList = document.getElementById('alertList');
    const sendNotificationButton = document.getElementById('sendNotification');
    const logoutButton = document.getElementById('logoutButton');

    // CCTV 영상 소스 설정 (실제 소스를 여기에 설정하세요)
    cctvVideo.src = 'path_to_cctv_stream';

    // 예시 이슈 데이터 (실제 데이터는 AI 모델에서 가져오세요)
    const issues = [
        { time: '10:00', type: 'red', message: '긴급 상황 발생!' },
        { time: '10:05', type: 'orange', message: '빠른 조치 필요' },
        { time: '10:10', type: 'yellow', message: '조만간 개선 필요' },
        { time: '10:15', type: 'green', message: '현행 유지' }
    ];

    // 이슈를 화면에 표시하는 함수
    function displayIssues() {
        issues.forEach(issue => {
            const li = document.createElement('li');
            li.classList.add(issue.type);
            li.textContent = `${issue.time} - ${issue.message}`;
            alertList.appendChild(li);
        });
    }

    // 알림 전송 버튼 클릭 이벤트
    sendNotificationButton.addEventListener('click', () => {
        const selectedIssue = issues.find(issue => issue.type === 'red' || issue.type === 'orange');
        if (selectedIssue) {
            alert(`알림 전송: ${selectedIssue.message}`);
            // 실제 알림 전송 로직을 여기에 추가하세요 (예: 카톡, 문자)
        } else {
            alert('전송할 긴급 이슈가 없습니다.');
        }
    });

    // 로그아웃 버튼 클릭 이벤트
    logoutButton.addEventListener('click', () => {
        alert('로그아웃 되었습니다.');
        // 실제 로그아웃 로직을 여기에 추가하세요
    });

    // 초기화
    displayIssues();
});


