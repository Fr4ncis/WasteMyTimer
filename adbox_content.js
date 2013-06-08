var WlWebsiteId = null;

function zbox_quoted(str) 
{
  return (str != "") ? '"' + str + '"' : '""';
}

function zbox_size(num) 
{
  return (num!="") && (num>0) ? '"' + num + '"' : '"0"';
}

function zbox_partner_code( id, checknumber, suba_id ) 
{
  if((id != "" ) && ( id > 0 ) &&  ( checknumber != "" ) && ( checknumber > 0 ))
  {
    return id + 'C' + checknumber + 'S' + suba_id;
  }
  return '';
}

function zbox_bg_param(adbox_color_bg)
{
	return('&ttbg=#' + adbox_color_bg);
}

function zbox_page_param(adbox_width, adbox_height, adbox_show_images)
{
	var page = 25;
	if((adbox_width == 125) && (adbox_height == 125))
	{
		page = 20;
	}
	else if((adbox_width == 468) && (adbox_height == 60))
	{
		page = 25;
	}
	else if((adbox_width == 120) && (adbox_height == 240))
	{
		page = 30;
	}
	else if((adbox_width == 120) && (adbox_height == 600))
	{
		page = 35;
	}
	else if((adbox_width == 160) && (adbox_height == 600))
	{
		page = 40;
	}
	else if((adbox_width == 180) && (adbox_height == 150))
	{
		page = 45;
	}
	else if((adbox_width == 300) && (adbox_height == 250))
	{
		page = 50;
	}
	else if((adbox_width == 336) && (adbox_height == 280))
	{
		page = 55;
	}
	else if((adbox_width == 250) && (adbox_height == 250))
	{
		page = 60;
	}
	else if((adbox_width == 728) && (adbox_height == 90))
	{
		page = 65;
	}
	else if((adbox_width == 240) && (adbox_height == 400))
	{
		page = 100;
	}
	else if((adbox_width == 234) && (adbox_height == 60))
	{
		page = 105;
	}
	else if((adbox_width == 120) && (adbox_height == 90))
	{
		page = 110;
	}
	else if((adbox_width == 120) && (adbox_height == 60))
	{
		page = 115;
	}
	else if((adbox_width == 88) && (adbox_height == 31))
	{
		page = 120;
	}
	else if((adbox_width == 200) && (adbox_height == 200))
	{
		page = 125;
	}
	else if((adbox_width == 300) && (adbox_height == 600))
	{
		page = 130;
	}
	else if((adbox_width == 250) && (adbox_height == 600))
	{
		page = 135;
	}
	else if((adbox_width == 120) && (adbox_height == 468))
	{
		page = 140;
	}
	else if((adbox_width == 468) && (adbox_height == 400))
	{
		page = 145;
	}
	else if((adbox_width == 400) && (adbox_height == 468))
	{
		page = 150;
	}
	else if((adbox_width == 300) && (adbox_height == 400))
	{
		page = 155;
	}
	else if((adbox_width == 600) && (adbox_height == 400))
	{
		page = 160;
	}
	else if((adbox_width == 140) && (adbox_height == 350))
	{
		page = 165;
	}
	else if((adbox_width == 250) && (adbox_height == 240))
	{
		page = 170;
	}
	else if((adbox_width == 250) && (adbox_height == 120))
	{
		page = 175;
	}

	if((page == 25) || (page == 65) || (page == 115) || (page == 120))
	{
		return '&page='+page;
	}
	if(adbox_show_images == true)
	{
		page += 1;
		return ('&page=' + page);
	}
	return ('&page=' + page);
}

function zbox_master_param()
{
	return '&master=11';
};

function zbox_master_website_param()
{
	return '&ma_website_id=183924';
};

function zbox_img_default_param(adbox_img_default)
{
	return ('&DefaultURL='+adbox_img_default);
};

function CallAdBoxTracking(adbox_id, adbox_checknumber, adbox_subaffiliate, adbox_width, adbox_height, adbox_color_border, adbox_color_bg, adbox_color_link, adbox_color_url, adbox_color_text, adbox_frameborder, adbox_img_default, adbox_show_images)
{
	if((adbox_id != "") && (adbox_id > 0) && (adbox_checknumber != "") && (adbox_checknumber > 0)) 
	{
	 window.document.open();
	 
	 var docloc = document.location;
	 var regex = /^(\w+):/;
  	 regex.exec(docloc);
  	 var scheme = RegExp.$1;
  	 
//   WlWebsiteId = adbox_id;
//   if (typeof (wlrcmd) == "undefined") { var wlrcmd = ""; };
//	 var tmp=		'<scr' + 'ipt language="JavaScript" src="http://rc.wunderloop.zanox.com/Tag/zanox/JS/Gt.js"></scr' + 'ipt>';
	 		var tmp = '<ifr' + 'ame' + ' name="zanox_adbox_frame"';
      tmp+=' width=' + zbox_size(adbox_width) + ' height=' + zbox_size(adbox_height);
      tmp+=               ' frameborder=' + zbox_quoted(adbox_frameborder);
      tmp+=               ' src="'+scheme+'://zbox.zanox.com/ppb/?' + zbox_partner_code(adbox_id, adbox_checknumber, adbox_subaffiliate) + zbox_img_default_param(adbox_img_default) + zbox_master_param() + zbox_page_param(adbox_width, adbox_height, adbox_show_images) + zbox_master_website_param() + zbox_bg_param(adbox_color_bg) + '" marginwidth="0"';
      tmp+=               ' marginheight="0"';
      tmp+=               ' vspace="0"';
      tmp+=               ' hspace="0"';
      tmp+=               ' allowtransparency="true"';
      tmp+=               ' scrolling="no">';
	  tmp+=				 '</ifr' + 'ame>';
//	  alert(tmp);
	 window.document.write(tmp);
	 window.document.close();
	}
}

