package com.thinkbiganalytics.kylo.model.enums;

/*-
 * #%L
 * kylo-spark-livy-core
 * %%
 * Copyright (C) 2017 - 2018 ThinkBig Analytics, a Teradata Company
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

/**
 * Session Kind
 * Value	Description
 * spark	Interactive Scala Spark session
 * pyspark	Interactive Python Spark session
 * sparkr	Interactive R Spark session
 * sql	Interactive SQL Spark session
 */
public enum SessionKind {
    spark,
    pyspark,
    sparkr,
    sql,
    shared
}