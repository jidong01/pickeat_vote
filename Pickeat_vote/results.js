document.addEventListener('DOMContentLoaded', (event) => {
    let counts = JSON.parse(localStorage.getItem('counts')) || {1: 0, 2: 0, 3: 0, 4: 0};
    updateCountsDisplay(counts);
});

function updateCountsDisplay(counts) {
    document.getElementById('count1').innerText = `1번 버튼 클릭 수: ${counts[1]}`;
    document.getElementById('count2').innerText = `2번 버튼 클릭 수: ${counts[2]}`;
    document.getElementById('count3').innerText = `3번 버튼 클릭 수: ${counts[3]}`;
    document.getElementById('count4').innerText = `4번 버튼 클릭 수: ${counts[4]}`;
}

function goBack() {
    window.location.href = 'index.html';
}

function resetCounts() {
    let counts = {1: 0, 2: 0, 3: 0, 4: 0};
    localStorage.setItem('counts', JSON.stringify(counts));
    updateCountsDisplay(counts);
}
