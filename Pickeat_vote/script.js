// 페이지가 로드될 때 로컬 스토리지에서 기존 클릭 수를 가져옴
document.addEventListener('DOMContentLoaded', (event) => {
    let storedCounts = JSON.parse(localStorage.getItem('counts'));
    if (storedCounts) {
        counts = storedCounts;
    } else {
        counts = {1: 0, 2: 0, 3: 0, 4: 0};
    }
});

function incrementCounter(number) {
    counts[number]++;
    console.log(`Button ${number} count: ${counts[number]}`);
    localStorage.setItem('counts', JSON.stringify(counts));
}

function viewResults() {
    window.location.href = 'results.html';
}
