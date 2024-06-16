document.addEventListener("DOMContentLoaded", function() {
    // Dữ liệu mẫu
    const results = [
        { title: "Result 1", description: "This is the description for result 1." },
        { title: "Result 2", description: "This is the description for result 2." },
        { title: "Result 3", description: "This is the description for result 3." }
    ];

    // Lấy phần tử chứa kết quả
    const resultsContainer = document.getElementById("results");

    // Hàm hiển thị kết quả
    function displayResults(results) {
        results.forEach(result => {
            // Tạo phần tử cho mỗi kết quả
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");

            // Thêm tiêu đề
            const resultTitle = document.createElement("h2");
            resultTitle.textContent = result.title;
            resultItem.appendChild(resultTitle);

            // Thêm mô tả
            const resultDescription = document.createElement("p");
            resultDescription.textContent = result.description;
            resultItem.appendChild(resultDescription);

            // Thêm phần tử kết quả vào container
            resultsContainer.appendChild(resultItem);
        });
    }

    // Hiển thị kết quả
    displayResults(results);
});
