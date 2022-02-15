function conversionCode () {
  alert("running");
  var convid = "1";
  var displayorder = "1";
  var linkalias = "Miami";
  var dataset = "";

  function getCookie(cookiename) {
    if (document.cookie.length > 0) {
      startC = document.cookie.indexOf(cookiename + "=");
      if (startC != -1) {
        startC += cookiename.length + 1;
        endC = document.cookie.indexOf(";", startC);
        if (endC == -1) endC = document.cookie.length;
        return unescape(document.cookie.substring(startC, endC));
      }
    }
    return null;
  }
  var jobid = getCookie("JobID");
  var emailaddr = getCookie("EmailAddr_");
  var subid = getCookie("SubscriberID");
  var listid = getCookie("ListID");
  var batchid = getCookie("BatchID");
  var urlid = getCookie("UrlID");
  var memberid = getCookie("MemberID");

  document.write("<img src='");
  document.write("http://click.s12.exacttarget.com/conversion.aspx?xml=<system><system_name>tracking</system_name><action>conversion</action>");
  document.write("<member_id>" + memberid + "</member_id>");
  document.write("<job_id>" + jobid + "</job_id>");
  if (subid == undefined) {
    document.write("<sub_id></sub_id>");
  } else {
    document.write("<sub_id>" + subid + "</sub_id>");
    emailaddr = undefined;
  }
  if (emailaddr == undefined) {
    document.write("<email></email>");
  } else {
    document.write("<email>" + emailaddr + "</email>");
  }
  document.write("<list>" + listid + "</list>");
  document.write("<BatchID>" + batchid + "</BatchID>");
  document.write("<original_link_id>" + urlid + "</original_link_id>");
  document.write("<conversion_link_id>" + convid + "</conversion_link_id>");
  document.write("<link_alias>" + linkalias + "</link_alias>");
  document.write("<display_order>" + displayorder + "</display_order>");
  document.write("<data_set>" + dataset + "</data_set>");
  document.write("</system>'");
  document.write(" width='1' height='1'>");
}
  
