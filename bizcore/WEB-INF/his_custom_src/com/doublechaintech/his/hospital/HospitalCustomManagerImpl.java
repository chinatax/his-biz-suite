

/*

这里面放置你需要定制的行为，可以增加方法，也可以重写原来的方法，主要是增加新的约束和关联。
注意，在同名方法里面一定要使用super来调用，不然将会出现缓冲出溢出的问题Stack Overflow。
这个类讲在第一次生成，此后这些文件不会被覆盖，如果名字发生了变更，则需要手动删除，修改本类来适应新的模型变更，
这个类已经被配置到了相应的Spring配置文件 WEB-INF/his_custom_src/META-INF/his_custom.xml 中，
所以直接在里面重写或者增加新的方法将会修改客户的行为

*/


package com.doublechaintech.his.hospital;
import com.doublechaintech.his.HisUserContext;
import com.terapico.uccaf.BaseUserContext;

public class HospitalCustomManagerImpl extends HospitalManagerImpl{
	
	@Override
	public Object checkAccess(BaseUserContext baseUserContext, String methodName, Object[] parameters)
			throws IllegalAccessException {
	
		if(methodName.startsWith("request")){
            return accessOK();
        }
		return super.checkAccess(baseUserContext, methodName, parameters);
		
	}
	public String requestNew(HisUserContext userContext,Hospital value) {
		System.out.print("run some thins");
		
		userContext.log(value+"");
		
		return "run some thins"+userContext+":"+value;
		
	}
	public String requestThis(HisUserContext userContext,Hospital value) {
		
		return "yes";
		
	}
	

	

}

