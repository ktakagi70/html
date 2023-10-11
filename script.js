// カード要素を取得
const cards = document.querySelectorAll('.card');

// カード要素にドラッグイベントを設定
cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
});

// ドラッグ開始時の処理
function dragStart() {
    // ドラッグ中のカードにクラスを付与
    this.classList.add('dragging');
}

// ドラッグ終了時の処理
function dragEnd() {
    // ドラッグ中のカードからクラスを削除
    this.classList.remove('dragging');
}

// カラム要素を取得
const columns = document.querySelectorAll('.column');

// カラム要素にドロップイベントを設定
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});

// ドラッグ中にカラムに入った時の処理
function dragOver(e) {
    // デフォルトの挙動をキャンセル
    e.preventDefault();
}

// カラムにドロップされた時の処理
function drop() {
    // ドラッグ中のカード要素を取得
    const draggingCard = document.querySelector('.dragging');
    
    // カラムにドロップされた場所にカードを挿入
    this.appendChild(draggingCard);
}
