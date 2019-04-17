
   //index.html scripts
    $(document).ready(function(){
        if($("#companyinfo").click(function()
        {
         $.ajax({
         url:"https://api.spacexdata.com/v3/info",
         success:function(result){
         var name=$("#name").html("<b>Name:</b>"+result.name)
         var founder=$("#founder").html("<b>Founder:</b>"+result.founder)
         var name=$("#founded").html("<b>Founded in:</b>"+result.founded)
         var name=$("#employees").html("<b>Employees:</b>"+result.employees)
         var name=$("#vehicles").html("<b>Vehicles:</b>"+result.vehicles)
         var name=$("#launchsites").html("<b>Launch sites:</b>"+result.launch_sites)
         var name=$("#testsites").html("<b>Test Sites:</b>"+result.test_sites)
         var name=$("#headquarters").html("<b>Headquarters:</b>"+result.headquarters.address)
         var name=$("#summary").html("<b>Name:</b>"+result.summary)
         $('#myModal').modal('toggle');
     }
     });
}));


   //getting data
       if($("#apiinfo").click(function(){
            $.ajax({
                url:"https://api.spacexdata.com/v3",
                success:function(res)
                {
                    var projectname=$("#projectname").html("<b>Project Name:</b>"+res.project_name)
                    var version=$("#version").html("<b>Version:</b>"+res.version)
                    var organization=$("#organization").html("<b>Organization:</b>"+res.organization)
                    var description=$("#description").html("<b>Description:</b>"+res.description)
                    var project_link=$("#project_link").html("<b>Link:</b><a target=_blank href='"+res.project_link+"'>Project_link</a>")
                    var organization_link=$("#organization_link").html("<b>Link:</b><a target=_blank href='"+res.organization_link+"'>Organization_link</a>")
                    $("#apiInfo").modal("toggle");  
                }
            })
       }));

      
   
});//end