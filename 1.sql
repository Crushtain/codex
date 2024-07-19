-- 1.1

select d.id
from public.departments d
where d.id not in (select department_id from public.dep_names);

--1.2

select d.id
from public.departments d
join (select department_id, count(id) count_id
from public.dep_names
group by department_id) j on d.id = j.department_id and count_id >= 2

--1.3

select d.*, dn.name
from public.departments d
left join (
    select department_id, MIN(id) as min_id
    from public.dep_names
    group by department_id
) min_dep_names on d.id = min_dep_names.department_id
left join public.dep_names dn on min_dep_names.department_id = dn.department_id and min_dep_names.min_id = dn.id;
