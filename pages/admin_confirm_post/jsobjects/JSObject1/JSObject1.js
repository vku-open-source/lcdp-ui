export default {
	Table1primaryColumnscustomColumn1onClick () {
		Table1.clear(); // Xóa dữ liệu cũ nếu cần
		Table1.run(); // Chạy lại API để làm mới dữ liệu
	}
}