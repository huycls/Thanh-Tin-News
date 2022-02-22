
    $(document).ready(function()
    { 
      var submit = $("button[type='submit']");
      submit.click(function()
                  {
                     var data = $('form#test-form').serialize();
                     $.ajax({
                               type : 'GET', 
                               url : 'URL API của bạn',
                               dataType:'json',
                               crossDomain : true,
                               data : data,
                               success : function(data)
                             { 
                     if(data == 'false') 
                             {
                                alert('Thêm không thành công');
                             }else{
                                alert('Đã thêm dữ liệu vào Form');
                             }
                  }
       });
       return false;
      });
    });
