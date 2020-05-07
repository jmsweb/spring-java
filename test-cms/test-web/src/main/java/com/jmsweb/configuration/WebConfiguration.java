package com.jmsweb.configuration;

import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebConfiguration implements WebApplicationInitializer {

    public void onStartup(ServletContext context) {
        AnnotationConfigWebApplicationContext webContext = new AnnotationConfigWebApplicationContext();
        webContext.register(SpringConfiguration.class);
        webContext.setServletContext(context);
        ServletRegistration.Dynamic servlet = context.addServlet("dispatcher", new DispatcherServlet(webContext));
        servlet.setLoadOnStartup(1);
        servlet.addMapping("/");
    }
}