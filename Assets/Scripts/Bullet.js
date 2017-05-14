#pragma strict
var maxDistance : float = 100;
var hitWall : GameObject;
var inFront : float = 0.001;

function Update ()
{
	var hit : RaycastHit;
	if(Physics.Raycast(transform.position, transform.forward, hit, maxDistance))
		{
			if(hit.transform.tag == "Level")
			{
				Instantiate(hitWall, hit.point + (hit.normal * inFront), Quaternion.LookRotation(hit.normal));
			}
		}
		Destroy(gameObject);
}