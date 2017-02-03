/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.47
 * Generated at: 2017-02-03 08:10:40 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.alfresco.repo.admin.SysAdminParams;
import org.alfresco.service.descriptor.DescriptorService;
import org.alfresco.service.transaction.TransactionService;
import org.alfresco.util.UrlUtil;
import org.alfresco.service.cmr.module.ModuleService;
import org.alfresco.service.cmr.module.ModuleDetails;
import org.alfresco.service.cmr.module.ModuleInstallState;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- Enterprise index-jsp placeholder -->\r\n");

// route WebDAV requests
if (request.getMethod().equalsIgnoreCase("PROPFIND") || request.getMethod().equalsIgnoreCase("OPTIONS"))
{
   response.sendRedirect(request.getContextPath() + "/webdav/");
}

      out.write("\r\n");
      out.write("\r\n");

WebApplicationContext context = WebApplicationContextUtils.getRequiredWebApplicationContext(session.getServletContext());
SysAdminParams sysAdminParams = (SysAdminParams)context.getBean("sysAdminParams");
DescriptorService descriptorService = (DescriptorService)context.getBean("descriptorComponent");
TransactionService transactionService = (TransactionService)context.getBean("transactionService");
ModuleService moduleService = (ModuleService) context.getBean("moduleService");
ModuleDetails shareServicesModule = moduleService.getModule("alfresco-share-services");

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\r\n");
      out.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n");
      out.write("<head>\r\n");
      out.write("   <title>Alfresco</title>\r\n");
      out.write("   <link rel=\"stylesheet\" type=\"text/css\" href=\"./css/reset.css\" />\r\n");
      out.write("   <link rel=\"stylesheet\" type=\"text/css\" href=\"./css/alfresco.css\" />\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("   <div class=\"sticky-wrapper\">\r\n");
      out.write("      <div class=\"index\">\r\n");
      out.write("         \r\n");
      out.write("         <div class=\"title\">\r\n");
      out.write("            <span class=\"logo\"><a href=\"http://www.alfresco.com\"><img src=\"./images/logo/logo.png\" width=\"145\" height=\"48\" alt=\"\" border=\"0\" /></a></span>\r\n");
      out.write("            <span class=\"logo-separator\">&nbsp;</span>\r\n");
      out.write("            <h1>Welcome to Alfresco</h1>\r\n");
      out.write("         </div>\r\n");
      out.write("         \r\n");
      out.write("         <div class=\"index-list\">\r\n");
      out.write("            <h4>");
      out.print(descriptorService.getServerDescriptor().getEdition());
      out.write("&nbsp;-&nbsp;");
      out.print(descriptorService.getServerDescriptor().getVersion());
      out.write("</h4>\r\n");
      out.write("            <p></p>\r\n");
      out.write("            <p><a href=\"http://docs.alfresco.com/\">Online Documentation</a></p>\r\n");
      out.write("            <p></p>\r\n");
      out.write("             ");

                 if (shareServicesModule != null && ModuleInstallState.INSTALLED.equals(shareServicesModule.getInstallState()))
                 {
             
      out.write("\r\n");
      out.write("                <p><a href=\"");
      out.print(UrlUtil.getShareUrl(sysAdminParams));
      out.write("\">Alfresco Share</a></p>\r\n");
      out.write("                <p></p>\r\n");
      out.write("             ");

                }
             
      out.write("\r\n");
      out.write("            <p><a href=\"./webdav\">Alfresco WebDav</a></p>\r\n");
      out.write("            <p></p>\r\n");
      out.write("            <p><a href=\"./s/index\">Alfresco WebScripts Home</a> (admin only)</p>\r\n");

   if (descriptorService.getLicenseDescriptor() == null && transactionService.isReadOnly())
   {

      out.write("\r\n");
      out.write("            <p>WARNING: The system is in Read Only mode, the License may have failed to deploy. Please visit the <a href=\"./s/enterprise/admin\">Alfresco Administration Console</a> (admin only)</p>\r\n");
 
   }
   if (descriptorService.getLicenseDescriptor() != null && descriptorService.getLicenseDescriptor().getLicenseMode().toString().equals("ENTERPRISE"))
   {

      out.write("\r\n");
      out.write("            <p><a href=\"./s/enterprise/admin\">Alfresco Administration Console</a> (admin only)</p>\r\n");
      out.write("            <p></p>\r\n");
      out.write("            <p><a href=\"http://support.alfresco.com\">Alfresco Support</a></p>\r\n");

   }
   else
   {

      out.write("\r\n");
      out.write("            <p><a href=\"./s/admin\">Alfresco Administration Console</a> (admin only)</p>\r\n");
      out.write("            <p></p>\r\n");
      out.write("            <p><a href=\"http://forums.alfresco.com/\">Alfresco Forums</a></p>\r\n");
      out.write("            <p><a href=\"http://issues.alfresco.com/\">Alfresco JIRA</a></p>\r\n");

   }

      out.write("\r\n");
      out.write("            <p></p>\r\n");
      out.write("            <p><a href=\"./api/-default-/public/cmis/versions/1.0/atom\">CMIS 1.0 AtomPub Service Document</a></p>\r\n");
      out.write("            <p><a href=\"./cmisws/cmis?wsdl\">CMIS 1.0 Web Services WSDL Document</a></p>\r\n");
      out.write("            <p><a href=\"./api/-default-/public/cmis/versions/1.1/atom\">CMIS 1.1 AtomPub Service Document</a></p>\r\n");
      out.write("            <p><a href=\"./api/-default-/public/cmis/versions/1.1/browser\">CMIS 1.1 Browser Binding URL</a></p>\r\n");
      out.write("         </div>\r\n");
      out.write("         \r\n");
      out.write("      </div>\r\n");
      out.write("      <div class=\"push\"></div>\r\n");
      out.write("   </div>\r\n");
      out.write("   <div class=\"footer\">\r\n");
      out.write("      Alfresco Software, Inc. &copy; 2005-2016 All rights reserved.\r\n");
      out.write("   </div>\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
