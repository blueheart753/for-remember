const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(37.597600, 127.021600),
			level: 3
		};

		const map = new kakao.maps.Map(container, options);