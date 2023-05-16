function showVideo() {
			document.getElementById("video-overlay").style.display = "block";
		}
		
		function closeVideo() {
			document.getElementById("video-overlay").style.display = "none";
			document.getElementById("video").src = document.getElementById("video").src;
		}