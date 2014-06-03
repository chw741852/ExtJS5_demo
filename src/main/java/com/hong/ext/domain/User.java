package com.hong.ext.domain;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Cai on 2014/5/30 16:23.
 */

@Entity
@Table(name = "sys_user")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(columnDefinition = "bigint")
    private String id;
    @Version
    private Long version;
    private String name;
    @Column(columnDefinition = "bigint")
    private String age;
    @Column(length = 50)
    private String type;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
