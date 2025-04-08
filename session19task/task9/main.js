1. let result = “javascript” + 5; //"javascript5"   | Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi, phép nối chuỗi sẽ diễn ra. "javascript" là chuỗi, nên 5 được chuyển thành "5" và ghép lại thành "javascript5".
2. let result = “javascript” - 1; //NaN             | Toán tử - chỉ áp dụng cho số. Chuỗi "javascript" không thể chuyển đổi thành số hợp lệ, nên kết quả là NaN (Not-a-Number).
3. let result = “3” + 2;          //32              | Toán tử + ưu tiên nối chuỗi. "3" là chuỗi nên 2 được chuyển thành "2", và kết quả là "32".
4. let result = “5” - 4;          // 1              | Toán tử - yêu cầu các toán hạng phải là số. JavaScript tự động chuyển "5" thành số 5, sau đó thực hiện phép toán 5 - 4 = 1.
5. let result = isNaN( “123”);    //false           | "123" có thể chuyển đổi thành số 123, không phải NaN, nên isNaN("123") trả về false.
6. let result = isNaN(“hello”);   //true            | "hello" không thể chuyển đổi thành số hợp lệ, nên kết quả là NaN, dẫn đến isNaN("hello") trả về true.
7. let result = Number.isNaN("123"); //false        | Number.isNaN chỉ trả về true nếu giá trị thực sự là NaN. "123" là chuỗi, không phải NaN, nên kết quả là false.
8. let result = Number.isNaN(NaN); //True           | NaN thực sự là NaN, nên Number.isNaN(NaN) trả về true.