<!DOCTYPE html>
<html>
<head>
<title>Admin Login</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
	<script type="text/javascript" src="js/script.js"></script>
</head>
<body>
	<section class="content">
		<div class="main-content contact">
			<div class="container">
			<div id="results"></div>
				<form action="#" method="post" name="contact-form" onsubmit="logincheck()">
				<div class="form-container left">
					<h2>Admin Login</h2>
					<div class="fields">
						<label>Username :</label><input type="text" name="username" id="username" required/>
					</div>
					<div class="fields">
						<label>Password :</label><input type="password" name="password" id="password" required/>
					</div>
						<label>&nbsp;</label> &nbsp;<input class="submit-button right" type="button" value="Login" id="login" onclick="logincheck()" />
				</div>
				</form>
			</div>
		</div>
</body>
</html>