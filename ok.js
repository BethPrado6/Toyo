<script type="text/javascript">
  function test() {if (confirm("Для закрытия окна нажмите 'OK'"))
	{ window.close()} }
</script>
<form>
    <input name=kuku type=submit value="Alert" onClick="alert('Это сообщение!')">
    <input name=tutu type=submit value="Confirm" onClick="test()">
    <input name=nunu type=submit value="Prompt" onClick="prompt('Укажите ваше имя','')">
</form>
